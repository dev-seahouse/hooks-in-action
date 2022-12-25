import { useState, useId } from 'react';
import { Bookable, Days, Sessions } from '@/types/bookable';

interface Props {
  bookable: Bookable;
  days: Days;
  sessions: Sessions;
}

function BookableDetails({ bookable, days, sessions }: Props) {
  const [shouldShowDetails, setShouldShowDetails] = useState(false);
  const checkboxId = useId();
  return (
    <div className="text-left text-white">
      {/* item header */}
      <div className="flex items-center justify-between border-b-8 border-solid border-white bg-primary p-4 ">
        <h2 className="text-2xl font-bold">{bookable.title}</h2>
        <div className="flex items-center">
          <div className="space-x-1">
            <input
              type="checkbox"
              id={checkboxId}
              onChange={() =>
                setShouldShowDetails(previousState => !previousState)
              }
            />
            <label htmlFor={checkboxId}>Show Details</label>
          </div>
        </div>
      </div>
      {/* notes */}
      <p className="bg-tertiary px-10 pt-3 pb-4">{bookable.notes}</p>
      {/* item details */}
      {shouldShowDetails ? (
        <div className="bg-tertiary px-10 pb-2">
          {/* item details header */}
          <h3 className="border-b border-b-white text-lg font-bold">
            Availability
          </h3>
          {/* item details content */}
          <div className="flex space-x-4">
            <ul className="list-inside list-square py-3">
              {bookable.days.sort().map(d => (
                <li key={d}>{days[d]}</li>
              ))}
            </ul>
            <ul className="list-inside list-square py-3">
              {bookable.sessions.map(s => (
                <li key={s}>{sessions[s]}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : undefined}
    </div>
  );
}

export default BookableDetails;
