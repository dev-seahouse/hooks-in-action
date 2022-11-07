import React, { useState } from 'react';
import classnames from 'classnames/dedupe';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../Button';
import { bookables, days, sessions } from '../../static.json';
import BookableListDetails from './BookableListDetails';
import type { Days, Sessions } from '@/types/bookable';

export default function BookablesList() {
  const [parent] = useAutoAnimate<HTMLUListElement>();
  const [group, setGroup] = useState('Kit');
  const [bookableIndex, setBookableIndex] = useState(0);
  const bookablesInGroup = bookables.filter(b => b.group === group);

  const bookable = bookablesInGroup[bookableIndex];

  const groups = [...new Set(bookables.map(b => b.group))];

  function handleNextButtonPress() {
    setBookableIndex(i => (i + 1) % bookablesInGroup.length);
  }

  function handleGroupChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    setGroup(value);
  }

  return (
    <React.Fragment>
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
                onPress={() => setBookableIndex(index)}
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
    </React.Fragment>
  );
}
