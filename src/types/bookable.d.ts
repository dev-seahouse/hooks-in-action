export interface Bookable {
  id: number;
  group: string;
  title: string;
  notes: string;
  sessions: Array<number>;
  days: Array<number>;
}
