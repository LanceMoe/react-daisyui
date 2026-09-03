import clsx from 'clsx';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentSize, IComponentBaseProps } from '../types';

export type AuraProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    variant?: 'dual' | 'rainbow' | 'holo' | 'gold' | 'silver' | 'glow';
    size?: ComponentSize;
  };

const Aura = forwardRef<HTMLDivElement, AuraProps>(
  ({ children, variant, size, dataTheme, className, ...props }, ref) => {
    const classes = twMerge(
      'aura',
      clsx({
        'aura-dual': variant === 'dual',
        'aura-rainbow': variant === 'rainbow',
        'aura-holo': variant === 'holo',
        'aura-gold': variant === 'gold',
        'aura-silver': variant === 'silver',
        'aura-glow': variant === 'glow',
        'aura-xl': size === 'xl',
        'aura-lg': size === 'lg',
        'aura-md': size === 'md',
        'aura-sm': size === 'sm',
        'aura-xs': size === 'xs',
      }),
      className,
    );

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </div>
    );
  },
);

Aura.displayName = 'Aura';

export default Aura;
