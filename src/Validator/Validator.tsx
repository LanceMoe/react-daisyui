import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type ValidatorProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    hint?: React.ReactNode;
  };

const Validator = forwardRef<HTMLDivElement, ValidatorProps>(
  ({ children, hint, dataTheme, className, ...props }, ref) => {
    return (
      <>
        <div {...props} ref={ref} data-theme={dataTheme} className={twMerge('validator', className)}>
          {children}
        </div>
        {hint !== undefined && <p className="validator-hint">{hint}</p>}
      </>
    );
  },
);

Validator.displayName = 'Validator';

export default Validator;
