import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentColor, ComponentSize, IComponentBaseProps, ListOrItem } from '../types';
import type { SelectOptionProps } from './SelectOption';
import SelectOption from './SelectOption';

export type SelectProps = Omit<React.ComponentPropsWithoutRef<'select'>, 'size' | 'color'> &
  IComponentBaseProps & {
    children: ListOrItem<React.ReactElement<SelectOptionProps>>;
    size?: ComponentSize;
    color?: ComponentColor;
    bordered?: boolean;
  };

function SelectInner(props: SelectProps, ref: React.ForwardedRef<HTMLSelectElement>): React.JSX.Element {
  const { children, size, color, bordered, dataTheme, className, ...rest } = props;

  const classes = twMerge(
    'select',
    className,
    clsx({
      'select-xl': size === 'xl',
      'select-lg': size === 'lg',
      'select-md': size === 'md',
      'select-sm': size === 'sm',
      'select-xs': size === 'xs',
      'select-primary': color === 'primary',
      'select-secondary': color === 'secondary',
      'select-accent': color === 'accent',
      'select-ghost': color === 'ghost',
      'select-info': color === 'info',
      'select-success': color === 'success',
      'select-warning': color === 'warning',
      'select-error': color === 'error',
      border: bordered,
    }),
  );

  return (
    <select {...rest} ref={ref} data-theme={dataTheme} className={classes}>
      {children}
    </select>
  );
}

const Select = React.forwardRef(SelectInner);
export default Object.assign(Select, { Option: SelectOption });
