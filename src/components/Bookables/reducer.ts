import { ErrorWithMessage } from '../../utils/ErrorUtils/types.d';
import { ACTION_TYPES } from './actionTypes';
import { BookableActions } from './types.d';
import { Bookable } from '@/types/bookable';

export interface BookablesState {
  bookables: Bookable[];
  group: Bookable['group'];
  bookableIndex: number;
  isLoading: boolean;
  error: ErrorWithMessage | null;
}

// default state is used the second argument of user reducer is not defined
export const defaultState = {
  bookables: [],
  group: 'Kit' as Bookable['group'],
  bookableIndex: 0,
  isLoading: false,
  error: null,
};

export default function bookablesReducer(
  state: BookablesState,
  { type, payload }: BookableActions
): BookablesState {
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
    case ACTION_TYPES.FETCH_BOOKABLES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
        bookables: [],
      };
    }
    case ACTION_TYPES.FETCH_BOOKABLES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        bookables: payload,
      };
    }
    case ACTION_TYPES.FETCH_BOOKABLES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    default: {
      throw new TypeError(`Unhandled action type: ${type}`);
    }
  }
}
