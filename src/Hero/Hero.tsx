import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';
import HeroContent from './HeroContent';
import HeroOverlay from './HeroOverlay';

export type HeroProps = React.ComponentPropsWithoutRef<'div'> & IComponentBaseProps;

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ dataTheme, className, children, ...props }, ref): React.JSX.Element => {
    const classes = twMerge('hero', className);

    return (
      <div role="banner" {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

export default Object.assign(Hero, {
  Content: HeroContent,
  Overlay: HeroOverlay,
});
