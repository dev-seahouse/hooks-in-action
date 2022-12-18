import UserList from '@/components/UserList';

function UsersPage() {
  return (
    <main className="grid max-w-[70em] grid-cols-[1fr_3fr] gap-x-10">
      <UserList />
    </main>
  );
}

export default UsersPage;
