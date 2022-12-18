import { User } from '@/types/user';

interface UserListDetailsProps {
  user?: User;
}

function UserListDetails({ user }: UserListDetailsProps) {
  return (
    <div className="text-left text-white">
      {/*item header */}
      <div className="flex items-center justify-between border-b-8 border-solid border-white bg-primary p-4 ">
        <h2 className="text-2xl font-bold">{user?.name ?? 'no user name'}</h2>
      </div>
      {/* item content */}
      <div className="bg-tertiary px-10 pt-3 pb-4">
        <h3 className="border-b border-b-white text-lg font-bold">
          {user?.title ?? 'no title'}
        </h3>
        <div className="py-2">{user?.notes ?? 'no notes'}</div>
      </div>
    </div>
  );
}

export default UserListDetails;
