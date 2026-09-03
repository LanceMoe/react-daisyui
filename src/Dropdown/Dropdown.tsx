import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';
import DropdownDetails from './DropdownDetails';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

export type DropdownProps<T extends React.ElementType = 'div'> = React.ComponentPropsWithoutRef<T> &
  IComponentBaseProps & {
    item?: React.ReactNode;
    horizontal?: 'left' | 'right';
    vertical?: 'top' | 'bottom';
    end?: boolean;
    hover?: boolean;
    open?: boolean;
  };

export const classesFn = ({
  className,
  horizontal,
  vertical,
  end,
  hover,
  open,
}: Pick<DropdownProps, 'className' | 'horizontal' | 'vertical' | 'end' | 'hover' | 'open'>) =>
  twMerge(
    'dropdown',
    className,
    clsx({
      'dropdown-left': horizontal === 'left',
      'dropdown-right': horizontal === 'right',
      'dropdown-top': vertical === 'top',
      'dropdown-bottom': vertical === 'bottom',
      'dropdown-end': end,
      'dropdown-hover': hover,
      'dropdown-open': open,
    }),
  );

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    { children, className, item, horizontal, vertical, end, hover, open, dataTheme, ...props },
    ref,
  ): React.JSX.Element => {
    return (
      <div
        role="listbox"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classesFn({
          className,
          horizontal,
          vertical,
          end,
          hover,
          open,
        })}
      >
        {item ? (
          <>
            <label tabIndex={0}>{children}</label>
            <ul className="dropdown-content">{item}</ul>
          </>
        ) : (
          <>{children}</>
        )}
      </div>
    );
  },
);

export default Object.assign(Dropdown, {
  Details: DropdownDetails,
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
});
