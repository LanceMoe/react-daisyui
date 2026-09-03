import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type LabelProps = React.ComponentPropsWithoutRef<'label'> &
  IComponentBaseProps & {
    title?: string;
  };

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, title, dataTheme, className, ...props }, ref): React.JSX.Element => {
    const classes = twMerge('label', className);

    return (
      <label {...props} data-theme={dataTheme} className={classes} ref={ref}>
        <span className="cursor-pointer">{title}</span>
        {children}
      </label>
    );
  },
);

export default Label;
