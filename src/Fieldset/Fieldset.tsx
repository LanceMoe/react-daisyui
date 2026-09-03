import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type FieldsetProps = React.ComponentPropsWithoutRef<'fieldset'> &
  IComponentBaseProps & {
    legend?: React.ReactNode;
    description?: React.ReactNode;
  };

const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ children, legend, description, dataTheme, className, ...props }, ref) => {
    return (
      <fieldset {...props} ref={ref} data-theme={dataTheme} className={twMerge('fieldset', className)}>
        {legend !== undefined && <legend className="fieldset-legend">{legend}</legend>}
        {children}
        {description !== undefined && <p className="label">{description}</p>}
      </fieldset>
    );
  },
);

Fieldset.displayName = 'Fieldset';

export default Fieldset;
