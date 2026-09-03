import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type HoverGalleryProps = ComponentPropsWithoutRef<'figure'> &
  IComponentBaseProps & {
    children?: ReactNode;
  };

const HoverGallery = forwardRef<HTMLElement, HoverGalleryProps>(({ children, dataTheme, className, ...props }, ref) => {
  return (
    <figure {...props} ref={ref} data-theme={dataTheme} className={twMerge('hover-gallery', className)}>
      {children}
    </figure>
  );
});

HoverGallery.displayName = 'HoverGallery';

export default HoverGallery;
