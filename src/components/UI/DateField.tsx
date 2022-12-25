import React, { useRef } from 'react';
import { useDateField, useDateSegment, useLocale } from 'react-aria';
import { DateFieldState, useDateFieldState, DateSegment } from 'react-stately';
import { createCalendar } from '@internationalized/date';
import type { CalendarDate } from '@internationalized/date';
import type { AriaDateFieldProps } from 'react-aria';

type DateFieldProps = AriaDateFieldProps<CalendarDate>;

export function DateField(props: DateFieldProps) {
  const { label } = props;
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <div className="flex flex-col items-start">
      <span {...labelProps}>{label}</span>
      <div
        {...fieldProps}
        ref={ref}
        className="inline-flex rounded-2xl border border-neutral-300 bg-white px-5 py-1 focus-within:border-blue-400"
      >
        {React.Children.toArray(
          state.segments.map(segment => (
            <DateSegment segment={segment} state={state} />
          ))
        )}
        {state.validationState === 'invalid' && (
          <span aria-hidden="true">🚫</span>
        )}
      </div>
    </div>
  );
}

type DateSegmentProps = {
  segment: DateSegment;
  state: DateFieldState;
};
function DateSegment({ segment, state }: DateSegmentProps) {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      className="focus:bg-blue-400 focus:text-white focus:outline-none"
    >
      {segment.text}
    </div>
  );
}
