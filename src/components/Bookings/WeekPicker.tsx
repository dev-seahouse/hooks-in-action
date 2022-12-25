import { useReducer } from 'react';
import { FaCalendarDay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from '../Button';
import { DateField } from '../UI/DateField';
import weekReducer, { WEEK_ACTION_TYPES } from './weekReducer';
import { getWeek } from '@/utils/date-wrangler';

type Props = {
  date: Date;
};

export function WeekPicker({ date }: Props) {
  const [week, dispatch] = useReducer(weekReducer, date, getWeek);
  console.log('hello');
  return (
    <nav>
      <div className="flex w-full items-center justify-around">
        <Button
          variant="secondary"
          onPress={() => dispatch({ type: WEEK_ACTION_TYPES.PREV_WEEK })}
        >
          <FaChevronLeft className="mr-1 inline text-sm" />
          <span>Prev</span>
        </Button>

        <Button
          variant="secondary"
          onPress={() => dispatch({ type: WEEK_ACTION_TYPES.TODAY })}
        >
          <FaCalendarDay className="mr-1 inline text-sm" />
          <span>Today</span>
        </Button>

        <div className="flex">
          <DateField />
          <Button variant="secondary">
            <FaCalendarDay className="mr-1 inline text-sm" />
            <span>Go</span>
          </Button>
        </div>

        <Button
          variant="secondary"
          onPress={() => dispatch({ type: WEEK_ACTION_TYPES.NEXT_WEEK })}
        >
          <span>Next</span>
          <FaChevronRight className="ml-1 inline text-sm" />
        </Button>
      </div>
      <p className="p-4 font-semibold">
        {week.start.toDateString()}- {week.end.toDateString()}
      </p>
    </nav>
  );
}
