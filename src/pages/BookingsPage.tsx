import { WeekPicker } from '@/components/Bookings/WeekPicker';

export default function BookingsPage() {
  return (
    <main className="grid max-w-[70em] grid-cols-[1fr_3fr] gap-x-10">
      <p> Bookings! </p>
      <WeekPicker date={new Date()} />
    </main>
  );
}
