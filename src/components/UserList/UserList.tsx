import React, { useState } from 'react';
import { users } from '../../static.json';
import Button from '../Button';
import UserListDetails from './UserListDetails';

export function UserList() {
  const [selectedUserId, setSelectedUserId] = useState(1);
  const selectedUser = users.find(u => u.id === selectedUserId);

  return (
    <React.Fragment>
      <div>
        <ul className="my-4 mx-auto w-full list-none p-0">
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
      </div>
      <UserListDetails user={selectedUser} />
    </React.Fragment>
  );
}
