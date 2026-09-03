import { type ComponentPropsWithoutRef,forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type CalendarProps = ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    library?: 'cally' | 'react-day-picker' | 'vc';
  };

const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ children, library = 'cally', dataTheme, className, ...props }, ref) => {
    const classes = twMerge(
      library === 'cally' ? 'cally' : library === 'react-day-picker' ? 'react-day-picker' : 'vc',
      className,
    );

    return (
      <div
        {...props}
        ref={ref}
        data-theme={dataTheme}
        aria-label={props['aria-label'] || 'Calendar'}
        className={classes}
      >
        {children}
      </div>
    );
  },
);

Calendar.displayName = 'Calendar';

export default Calendar;
