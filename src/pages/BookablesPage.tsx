import BookablesList from '../components/Bookables/BookablesList';

export default function BookablesPage() {
  return (
    <main className="grid max-w-[70em] grid-cols-[1fr_3fr] gap-x-10">
      <BookablesList />
    </main>
  );
}
