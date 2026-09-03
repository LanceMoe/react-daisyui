import clsx from 'clsx';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentSize, IComponentBaseProps } from '../types';

export type MegamenuProps = ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    variant?: 'wide' | 'full';
    vertical?: boolean;
    responsive?: boolean;
    size?: ComponentSize;
  };

const Megamenu = forwardRef<HTMLDivElement, MegamenuProps>(
  ({ children, variant, vertical, responsive, size, dataTheme, className, ...props }, ref) => {
    const classes = twMerge(
      'megamenu',
      clsx({
        'megamenu-wide': variant === 'wide',
        'megamenu-full': variant === 'full',
        'megamenu-vertical': vertical,
        'max-sm:megamenu-vertical': responsive,
        'megamenu-xl': size === 'xl',
        'megamenu-lg': size === 'lg',
        'megamenu-md': size === 'md',
        'megamenu-sm': size === 'sm',
        'megamenu-xs': size === 'xs',
      }),
      className,
    );

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        <span className="megamenu-active" aria-hidden="true" />
        {children}
      </div>
    );
  },
);

Megamenu.displayName = 'Megamenu';

export default Megamenu;
