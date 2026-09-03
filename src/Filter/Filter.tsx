import { type ComponentPropsWithoutRef,forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type FilterProps = ComponentPropsWithoutRef<'form'> &
  IComponentBaseProps & {
    reset?: boolean;
    resetLabel?: string;
  };

const Filter = forwardRef<HTMLFormElement, FilterProps>(
  ({ children, reset, resetLabel = '×', dataTheme, className, ...props }, ref) => {
    return (
      <form
        {...props}
        ref={ref}
        data-theme={dataTheme}
        aria-label={props['aria-label'] || 'Filter'}
        className={twMerge('filter', className)}
      >
        {reset && (
          <input className="btn btn-square filter-reset" type="reset" value={resetLabel} aria-label="Reset filter" />
        )}
        {children}
      </form>
    );
  },
);

Filter.displayName = 'Filter';

export default Filter;
