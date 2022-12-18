import { HTMLAttributes } from 'react';
import { FaSpinner } from 'react-icons/fa';

export function Spinner(props: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props}>
      <FaSpinner className="icon-loading" />
    </span>
  );
}
