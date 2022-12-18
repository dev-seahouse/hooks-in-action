import { useReducer, useRef, Fragment } from 'react';
import classnames from 'classnames/dedupe';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../Button';
import BookableListDetails from './BookableListDetails';
import bookablesReducer from './reducer';
import { ACTION_TYPES } from './actionTypes';
import { bookables as bookablesData, days, sessions } from '@/static.json';
import type { Bookable, Days, Sessions } from '@/types/bookable';

export default function BookablesList() {
  const { current: initialState } = useRef({
    bookables: bookablesData,
    group: 'Kit' as Bookable['group'],
    bookableIndex: 0,
  });
  const [{ bookables, group, bookableIndex }, dispatch] = useReducer(
    bookablesReducer,
    initialState
  );
  const [parent] = useAutoAnimate<HTMLUListElement>();
  const bookablesInGroup = bookables.filter(b => b.group === group);
  const groups = [...new Set(bookables.map(b => b.group))];
  const bookable = bookablesInGroup[bookableIndex];

  function handleNextButtonPress() {
    dispatch({ type: ACTION_TYPES.NEXT_BOOKABLE });
  }

  function handleGroupChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    dispatch({ type: ACTION_TYPES.SET_GROUP, payload: value });
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
