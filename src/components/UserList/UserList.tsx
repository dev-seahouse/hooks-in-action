import { useState } from 'react';
import classNames from 'classnames/dedupe';
import { users } from '../../static.json';

export function UserList() {
  const [selectedUserId, setSelectedUserId] = useState(1);

  return (
    <ul className="users items-list-nav">
      {users.map(({ id, name }) => (
        <li
          key={id}
          className={classNames({ selected: id === selectedUserId })}
        >
          <button className="btn" onClick={() => setSelectedUserId(id)}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
