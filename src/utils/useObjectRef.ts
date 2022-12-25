import React, { MutableRefObject } from 'react';

export const useLayoutEffect =
  typeof window === 'undefined' ? () => {} : React.useLayoutEffect;

/**
 * Offers an object ref for a given callback ref or an object ref. Especially
 * helfpul when passing forwarded refs (created using `React.forwardRef`) to
 * React Aria Hooks.
 *
 * @param forwardedRef The original ref intended to be used.
 * @returns An object ref that updates the given ref.
 * @see https://reactjs.org/docs/forwarding-refs.html
 */
export function useObjectRef<T>(
  forwardedRef?:
    | ((instance: T | null) => void)
    | MutableRefObject<T | null>
    | null
): MutableRefObject<T> {
  const objectRef = React.useRef<T>();

  /**
   * We're using `useLayoutEffect` here instead of `useEffect` because we want
   * to make sure that the `ref` value is up to date before other places in the
   * the execution cycle try to read it.
   */
  useLayoutEffect(() => {
    if (!forwardedRef) {
      return;
    }

    if (typeof forwardedRef === 'function') {
      forwardedRef(objectRef.current || null);
    } else {
      // eslint-disable-next-line no-param-reassign
      forwardedRef.current = objectRef?.current ?? null;
    }
  }, [forwardedRef]);

  return objectRef as MutableRefObject<T>;
}
