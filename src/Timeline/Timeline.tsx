import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';
import TimelineEnd from './TimelineEnd';
import TimelineItem from './TimelineItem';
import TimelineMiddle from './TimelineMiddle';
import TimelineStart from './TimelineStart';

export type TimelineProps = React.ComponentPropsWithoutRef<'ul'> &
  IComponentBaseProps & {
    vertical?: boolean;
    horizontal?: boolean;
    responsive?: boolean;
    snap?: boolean;
    compact?: boolean;
  };

const Timeline = forwardRef<HTMLUListElement, TimelineProps>(
  (
    { dataTheme, className, vertical, horizontal, responsive, snap, compact, children, ...props },
    ref,
  ): React.JSX.Element => {
    const classes = twMerge(
      'timeline',
      clsx({
        'timeline-vertical': vertical,
        'timeline-horizontal': horizontal,
        'timeline-vertical lg:timeline-horizontal': responsive,
        'timeline-snap-icon': snap,
        'timeline-compact': compact,
      }),
      className,
    );

    return (
      <ul {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </ul>
    );
  },
);

Timeline.displayName = 'Timeline';

export default Object.assign(Timeline, {
  Item: TimelineItem,
  Start: TimelineStart,
  Middle: TimelineMiddle,
  End: TimelineEnd,
});
