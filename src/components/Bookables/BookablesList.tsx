import { useState } from 'react';
import classNames from 'classnames/dedupe';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { bookables } from '../../static.json';
import Button from '../Button';

export default function BookablesList() {
  const group = 'Rooms';
  const bookablesInGroup = bookables.filter(b => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(1);
  const [parent] = useAutoAnimate<HTMLUListElement>();

  return (
    <ul ref={parent} className="bookables items-list-nav">
      {bookablesInGroup.map((b, index) => (
        <li
          key={b.id}
          className={classNames({ selected: index === bookableIndex })}
        >
          <Button
            type="button"
            // className="btn"
            onPress={() => setBookableIndex(index)}
          >
            {b.title}
          </Button>
        </li>
      ))}
    </ul>
  );
}
