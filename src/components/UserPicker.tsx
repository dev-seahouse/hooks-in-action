import { useEffect, useState } from 'react';
import { User } from '@/types/user';

export default function UserPicker() {
  const [users, setUsers] = useState<User[] | void>();
  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(resp => resp.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <select role="listbox">
      {users?.map(u => (
        <option key={u.id} value={u.id} role="option">
          {u.name}
        </option>
      ))}
    </select>
  );
}
