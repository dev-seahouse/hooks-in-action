import { getWeek } from '@/utils/date-wrangler';

export type WEEK_ACTION_TYPES =
  typeof WEEK_ACTION_TYPES[keyof typeof WEEK_ACTION_TYPES];

export const WEEK_ACTION_TYPES = {
  NEXT_WEEK: 0,
  PREV_WEEK: 1,
  TODAY: 2,
  SET_DATE: 3,
} as const;

export interface SetDateAction {
  type: typeof WEEK_ACTION_TYPES.SET_DATE;
}

export type WeekReducerAction = {
  type: WEEK_ACTION_TYPES;
  payload?: Date;
};

export type WeekReducerState = {
  date: Date;
};

export default function weekReducer(
  state: WeekReducerState,
  action: WeekReducerAction
) {
  switch (action.type) {
    case WEEK_ACTION_TYPES.NEXT_WEEK: {
      return getWeek(state.date, 7);
    }
    case WEEK_ACTION_TYPES.PREV_WEEK: {
      return getWeek(state.date, -7);
    }
    case WEEK_ACTION_TYPES.TODAY: {
      return getWeek(new Date());
    }
    case WEEK_ACTION_TYPES.SET_DATE: {
      if (!action.payload) throw new Error('Missing payload');
      return getWeek(action.payload);
    }
    default: {
      throw new TypeError('Unknown action type: ' + action.type);
    }
  }
}
