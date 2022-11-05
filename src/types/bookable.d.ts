export interface Bookable {
  id: number;
  group: string;
  title: string;
  notes: string;
  sessions: Array<number>;
  days: Array<number>;
}

export type Days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export type Sessions = [
  'Breakfast',
  'Morning',
  'Lunch',
  'Afternoon',
  'Evening'
];
