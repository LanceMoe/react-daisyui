import clsx from 'clsx';
import { type ComponentPropsWithoutRef,forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type FabProps = ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    flower?: boolean;
  };

const Fab = forwardRef<HTMLDivElement, FabProps>(({ children, flower, dataTheme, className, ...props }, ref) => {
  const classes = twMerge('fab', clsx({ 'fab-flower': flower }), className);

  return (
    <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
      {children}
    </div>
  );
});

Fab.displayName = 'Fab';

export default Fab;
