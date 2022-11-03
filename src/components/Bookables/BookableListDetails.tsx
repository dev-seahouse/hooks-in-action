import type { Bookable } from '@/types/bookable';

interface Props {
  bookable: Bookable;
}

function BookableDetails({ bookable }: Props) {
  return (
    <div className="">
      <div className="bg-secondary p-8 text-left text-white">
        <div className="item-header">
          <h2 className="mt-5 text-2xl font-bold">{bookable.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default BookableDetails;
