import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type ValidatorProps = ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    hint?: ReactNode;
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
