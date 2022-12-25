import React from 'react';
import type { AriaButtonProps } from 'react-aria';
import { useButton, FocusRing } from 'react-aria';
import classnames from 'classnames/dedupe';
import { useObjectRef } from '@/utils/useObjectRef';

const baseClass = `ml-2 box-border
                  cursor-pointer
                  items-center
                  inline-flex
                  justify-center
                  rounded-3xl  px-6 py-2
                  text-base leading-[1.2]
                  transition-all
                  focus:outline-none
                  disabled:opacity-75
                  hover:enabled:shadow-[0_2px_5px_rgba(0,0,0,0.4)]`;

const variants = {
  primary: `bg-text-light border border-solid border-black/[0.3]
            hover:enabled:border-primary text-black
            enabled:active:bg-primary enabled:active:text-white
            data-[selected=true]:enabled:bg-primary data-[selected=true]:enabled:text-white
            `,
  secondary: `bg-secondary border border-solid border-black/[0.3]
            hover:enabled:border-secondary text-white
            enabled:active:bg-secondary enabled:active:text-white
            data-[selected=true]:enabled:bg-secondary data-[selected=true]:enabled:text-white`,
};

export const Button = React.forwardRef(function Button(
  {
    children,
    variant = 'primary',
    isSelected = false,
    isFullWidth = false,
    autoFocus = false,
    ...props
  }: ButtonProps,
  forwardRef: React.Ref<HTMLButtonElement>
) {
  const ref = useObjectRef(forwardRef);
  const ownRef = React.useRef<HTMLButtonElement>(null);
  const buttonRef = ref || ownRef;
  const { buttonProps } = useButton(props, buttonRef);
  const classes = classnames(baseClass, variants[variant], {
    'w-full': isFullWidth,
  });

  return (
    <FocusRing
      focusRingClass="ring ring-offset-1 ring-primary"
      focusClass="shadow-[0_2px_5px_rgba(0,0,0,0.4)]"
      autoFocus={autoFocus}
    >
      <button
        data-selected={isSelected}
        aria-selected={isSelected}
        className={classes}
        ref={buttonRef}
        {...buttonProps}
      >
        {children}
      </button>
    </FocusRing>
  );
});

interface ButtonProps extends AriaButtonProps {
  variant?: 'primary' | 'secondary';
  isSelected?: boolean;
  isFullWidth?: boolean;
  children: React.ReactNode;
}
