import { ACTION_TYPES } from './actionTypes';
import { BookableActions } from './types.d';
import { Bookable } from '@/types/bookable';

export interface BookableState {
  bookables: Bookable[];
  group: Bookable['group'];
  bookableIndex: number;
}

export default function bookablesReducer(
  state: BookableState,
  { type, payload }: BookableActions
): BookableState {
  switch (type) {
    case ACTION_TYPES.NEXT_BOOKABLE: {
      return {
        ...state,
        bookableIndex:
          (state.bookableIndex + 1) %
          state.bookables.filter(b => b.group === state.group).length,
      };
    }
    case ACTION_TYPES.SET_GROUP: {
      return {
        ...state,
        group: payload,
        bookableIndex: 0,
      };
    }
    case ACTION_TYPES.SET_BOOKABLE: {
      return {
        ...state,
        bookableIndex: payload,
      };
    }
    default: {
      throw new TypeError(`Unhandled action type: ${type}`);
    }
  }
}
