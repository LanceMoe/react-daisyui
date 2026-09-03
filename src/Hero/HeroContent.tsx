import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type HeroContentProps = React.ComponentPropsWithoutRef<'div'> & IComponentBaseProps;

const HeroContent = React.forwardRef<HTMLDivElement, HeroContentProps>(
  ({ dataTheme, className, children, ...props }, ref): React.JSX.Element => {
    const classes = twMerge('hero-content', className);

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

export default HeroContent;
