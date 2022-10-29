import React from 'react';
import type { AriaButtonProps } from 'react-aria';
import classNames from 'classnames';
import { useButton } from 'react-aria';

interface ButtonProps extends AriaButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const baseClass = `ml-2 box-border inline-flex cursor-pointer 
                    items-center justify-center 
                    rounded-3xl border-none bg-primary
                    px-6 py-2 text-base text-text-light 
                    transition-all hover:shadow-[0_2px_5px_rgba(0,0,0,0.4)]`;

  const classes = classNames(baseClass);

  return (
    <button className={classes} {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}
