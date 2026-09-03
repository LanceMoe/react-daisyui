import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { DropdownProps } from './Dropdown';
import { Summary } from './DropdownToggle';

export type DetailsProps = Omit<DropdownProps<'details'>, 'item' | 'hover'>;

const classesFn = ({
  className,
  horizontal,
  vertical,
  end,
  open,
}: Pick<DetailsProps, 'className' | 'horizontal' | 'vertical' | 'end' | 'open'>) =>
  twMerge(
    'dropdown',
    className,
    clsx({
      'dropdown-left': horizontal === 'left',
      'dropdown-right': horizontal === 'right',
      'dropdown-top': vertical === 'top',
      'dropdown-bottom': vertical === 'bottom',
      'dropdown-end': end,
      'dropdown-open': open,
    }),
  );

const Details = React.forwardRef<HTMLDetailsElement, DetailsProps>(
  ({ children, className, horizontal, vertical, end, dataTheme, open, ...props }, ref): React.JSX.Element => {
    return (
      <details
        role="listbox"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classesFn({
          className,
          horizontal,
          vertical,
          open,
          end,
        })}
        open={open}
      >
        {children}
      </details>
    );
  },
);

Details.displayName = 'Details';
export default Object.assign(Details, {
  Toggle: Summary,
});
