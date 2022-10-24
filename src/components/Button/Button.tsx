import React from 'react';
import type { AriaButtonProps } from 'react-aria';
import { useButton } from 'react-aria';

export function Button(props: AriaButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  return <button {...buttonProps} ref={ref}></button>;
}
