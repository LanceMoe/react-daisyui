import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type TimelineStartProps = React.ComponentPropsWithoutRef<'div'> & {
  box?: boolean;
};

const TimelineEnd = React.forwardRef<HTMLDivElement, TimelineStartProps>(
  ({ children, className, box = true, ...props }, ref) => {
    const classes = twMerge(
      'timeline-end',
      clsx({
        'timeline-box': box,
      }),
      className,
    );
    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

TimelineEnd.displayName = 'TimelineEnd';
export default TimelineEnd;
