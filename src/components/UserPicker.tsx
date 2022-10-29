import { users } from '../static.json';

export default function UserPicker() {
  return (
    <select role="listbox">
      {users.map(u => (
        <option key={u.id} value={u.id} role="option">
          {u.name}
        </option>
      ))}
    </select>
  );
}
