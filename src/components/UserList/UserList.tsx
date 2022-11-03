import { useState } from 'react';
import { users } from '../../static.json';
import Button from '../Button';

export function UserList() {
  const [selectedUserId, setSelectedUserId] = useState(1);

  return (
    <ul className="items-list-nav my-4 mx-auto w-full list-none p-0">
      {users.map(({ id, name }) => (
        <li key={id} className="p0 mt-0 ml-0 mb-4">
          <Button
            isFullWidth
            isSelected={id === selectedUserId}
            onPress={() => setSelectedUserId(id)}
          >
            {name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
