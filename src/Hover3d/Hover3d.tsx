import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type Hover3dProps = ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    children?: ReactNode;
  };

const Hover3d = forwardRef<HTMLDivElement, Hover3dProps>(({ children, dataTheme, className, ...props }, ref) => {
  return (
    <div {...props} ref={ref} data-theme={dataTheme} className={twMerge('hover-3d', className)}>
      {children}
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} aria-hidden="true" />
      ))}
    </div>
  );
});

Hover3d.displayName = 'Hover3d';

export default Hover3d;
