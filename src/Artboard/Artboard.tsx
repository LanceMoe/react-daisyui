import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

const sizeClasses = {
  1: { portrait: 'w-[320px] h-[568px]', landscape: 'w-[568px] h-[320px]' },
  2: { portrait: 'w-[375px] h-[667px]', landscape: 'w-[667px] h-[375px]' },
  3: { portrait: 'w-[414px] h-[736px]', landscape: 'w-[736px] h-[414px]' },
  4: { portrait: 'w-[375px] h-[812px]', landscape: 'w-[812px] h-[375px]' },
  5: { portrait: 'w-[414px] h-[896px]', landscape: 'w-[896px] h-[414px]' },
  6: { portrait: 'w-[320px] h-[1024px]', landscape: 'w-[1024px] h-[320px]' },
} as const;

export type ArtboardProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    demo?: boolean;
    size?: 1 | 2 | 3 | 4 | 5 | 6;
    horizontal?: boolean;
  };

const Artboard = forwardRef<HTMLDivElement, ArtboardProps>(
  ({ children, demo = true, size, horizontal, dataTheme, className, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'bg-base-100 overflow-auto rounded-box border border-base-300 shadow-lg',
      className,
      clsx({
        'p-4': demo,
        [sizeClasses[size || 1][horizontal ? 'landscape' : 'portrait']]: size !== undefined,
      }),
    );

    return (
      <div aria-label="Artboard" {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </div>
    );
  },
);

Artboard.displayName = 'Artboard';

export default Artboard;
