import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { ComponentPosition, IComponentBaseProps } from '../types';

export type StackProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    position?: Exclude<ComponentPosition, 'left' | 'right' | 'middle'>;
  };

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ position = 'bottom', dataTheme, className, children, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'stack',
      className,
      clsx({
        'stack-end': position === 'end',
        'stack-start': position === 'start',
        'stack-top': position === 'top',
        'stack-bottom': position === 'bottom',
      }),
    );

    return (
      <div aria-label="Stack" {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </div>
    );
  },
);

Stack.displayName = 'Stack';

export default Stack;
