import { ACTION_TYPES } from './actionTypes';

export type BookableActions = {
  type: typeof ACTION_TYPES[keyof typeof ACTION_TYPES];
  payload?: any;
};
