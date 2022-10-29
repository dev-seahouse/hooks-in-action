import React from 'react';
import type { AriaButtonProps } from 'react-aria';
import { useButton } from 'react-aria';

const variants = {
  primary: 'bg-text-light border border-solid border-black/[0.3]',
  secondary: 'bg-secondary',
};

export function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const variantClass = variants[variant];

  return (
    <button
      className={`border-red-800 ml-2 box-border
                  inline-flex cursor-pointer
                  items-center
                  justify-center
                  rounded-3xl  px-6 py-2
                  text-base leading-tight
                  transition-all
                  hover:shadow-[0_2px_5px_rgba(0,0,0,0.4)]
                  ${variantClass}
                  `}
      {...buttonProps}
      ref={ref}
    >
      {children}
    </button>
  );
}

interface ButtonProps extends AriaButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}
