import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { AvatarProps } from '../Avatar';

export type AvatarGroupProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactElement<AvatarProps>[];
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className, ...props }, ref): React.JSX.Element => {
    const classes = twMerge('avatar-group -space-x-6', className);

    return (
      <div aria-label={`Group of ${children.length} avatar photos`} {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

export default AvatarGroup;
