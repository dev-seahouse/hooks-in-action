import { Week } from '../types/dates.d';

export function addDays(date: Date, daysToAdd: number) {
  // javascript date does not take new Date() object, only 1.dateString 2. milliseconds
  // for 1: there is a bug https://javascript.info/date#creation
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + daysToAdd);
  return newDate;
}

/**
 *
 * @param forDate a date representing the day of the week to get
 * @param daysOffset optionally add days to the forDate, to get a week from a different day
 * @returns a week object with the start and end date of the week
 */
export function getWeek(forDate: Date, daysOffset = 0): Week {
  const date = addDays(forDate, daysOffset);
  const day = date.getDay();

  return {
    date,
    start: addDays(date, -day),
    end: addDays(date, 6 - day),
  };
}
