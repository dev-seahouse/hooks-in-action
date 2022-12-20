import { useReducer, useRef, Fragment, useEffect } from 'react';
import classnames from 'classnames/dedupe';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../Button';
import { Spinner } from '../UI/Spinner';
import BookableListDetails from './BookableListDetails';
import bookablesReducer, { defaultState } from './reducer';
import { ACTION_TYPES } from './actionTypes';
import type { BookablesState } from './reducer';
import getData from '@/utils/getData';
import type { Days, Sessions } from '@/types/bookable';
import { days, sessions } from '@/static.json';

export default function BookablesList() {
  const { current: initialState } = useRef<BookablesState>(defaultState);
  const [{ bookables, group, bookableIndex, error, isLoading }, dispatch] =
    useReducer(bookablesReducer, initialState);
  const [parent] = useAutoAnimate<HTMLUListElement>();
  const bookablesInGroup = bookables.filter(b => b.group === group);
  const groups = [...new Set(bookables.map(b => b.group))];
  const bookable = bookablesInGroup[bookableIndex];

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.FETCH_BOOKABLES_REQUEST,
    });
    getData('http://localhost:3001/bookables')
      .then(bookables =>
        dispatch({
          type: ACTION_TYPES.FETCH_BOOKABLES_SUCCESS,
          payload: bookables,
        })
      )
      .catch(error =>
        dispatch({ type: ACTION_TYPES.FETCH_BOOKABLES_ERROR, payload: error })
      );
  }, []);

  function handleNextButtonPress() {
    dispatch({ type: ACTION_TYPES.NEXT_BOOKABLE });
  }

  function handleGroupChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    dispatch({ type: ACTION_TYPES.SET_GROUP, payload: value });
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return (
      <p>
        <Spinner /> Loading bookables...
      </p>
    );
  }

  return (
    <Fragment>
      <div>
        <select
          name="bookable-groups"
          id="bookable-groups"
          value={group}
          onChange={handleGroupChange}
        >
          {groups.map(g => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <ul ref={parent} className="my-4 mx-auto w-full list-none p-0">
          {bookablesInGroup.map((b, index) => (
            <li key={b.id} className={classnames('p0 mt-0 ml-0 mb-4')}>
              <Button
                isFullWidth
                isSelected={index === bookableIndex}
                onPress={() =>
                  dispatch({ type: ACTION_TYPES.SET_BOOKABLE, payload: index })
                }
              >
                {b.title}
              </Button>
            </li>
          ))}
        </ul>
        <Button variant="secondary" onPress={handleNextButtonPress}>
          <FaArrowRight className="mr-1 text-white" />
          Next
        </Button>
      </div>
      {bookable ? (
        <BookableListDetails
          days={days as Days}
          sessions={sessions as Sessions}
          bookable={bookable}
        />
      ) : undefined}
    </Fragment>
  );
}
