import { bookables } from '../../static.json';

export default function BookablesList() {
  const group = 'Rooms';
  const bookablesInGroup = bookables.filter((b) => b.group === group);

  let bookableIndex = 1;

  function changeBookable(selectedIndex: number) {
    bookableIndex = selectedIndex;
  }

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li key={b.id} className={i === bookableIndex ? 'selected' : ''}>
          <button className="btn">{b.title}</button>
        </li>
      ))}
    </ul>
  );
}
