import React, { useState } from 'react';
import Button from '../Button';
import { Spinner } from '../UI/Spinner';
import UserListDetails from './UserListDetails';
import { User } from '@/types/user';
import getData from '@/utils/getData';
import { ErrorWithMessage } from '@/utils/ErrorUtils/types';

export function UserList() {
  const [selectedUserId, setSelectedUserId] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<ErrorWithMessage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setError(null);
    setIsLoading(true);
    getData('http://localhost:3001/users')
      .then(data => {
        setUsers(data), setIsLoading(false);
      })
      .catch(error => setError(error));
  }, []);

  const selectedUser = users.find(u => u.id === selectedUserId);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return (
      <p>
        <Spinner /> Loading users...
      </p>
    );
  }

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
