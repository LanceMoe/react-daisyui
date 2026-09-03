import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type LabelProps = React.ComponentPropsWithoutRef<'label'> & IComponentBaseProps;

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ children, dataTheme, className, ...props }, ref) => {
  return (
    <label {...props} ref={ref} data-theme={dataTheme} className={twMerge('label', className)}>
      {children}
    </label>
  );
});

Label.displayName = 'Label';

export default Label;
