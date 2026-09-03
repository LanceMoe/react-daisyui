import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

export type DiffProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    secondItem: ReactNode;
  };

const Diff = forwardRef<HTMLDivElement, DiffProps>(
  ({ dataTheme, className, children, secondItem, ...props }, ref): React.JSX.Element => {
    const classes = twMerge('diff aspect-[16/9]', clsx({}), className);

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref}>
        <div className="diff-item-1">{children}</div>
        <div className="diff-item-2">{secondItem}</div>
        <div className="diff-resizer" />
      </div>
    );
  },
);

Diff.displayName = 'Diff';

export default Diff;
