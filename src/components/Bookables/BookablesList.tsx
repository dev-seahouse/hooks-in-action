import { bookables } from '../../static.json'
import { useState } from 'react'
import classNames from 'classnames/dedupe'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function BookablesList() {
  const group = 'Rooms'
  const bookablesInGroup = bookables.filter((b) => b.group === group)
  const [bookableIndex, setBookableIndex] = useState(1)
  const [parent] = useAutoAnimate<HTMLUListElement>()

  return (
    <ul ref={parent} className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li
          key={b.id}
          className={classNames({ selected: i === bookableIndex })}
        >
          <button className="btn" onClick={() => setBookableIndex(i)}>
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  )
}
