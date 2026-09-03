import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import Loading from '../Loading';
import type { ComponentColor, ComponentShape, ComponentSize, ComponentVariant, IComponentBaseProps } from '../types';

type ITagProps = {
  a: {
    attr: React.ComponentPropsWithoutRef<'a'>;
    ele: HTMLAnchorElement;
  };
  button: {
    attr: React.ComponentPropsWithoutRef<'button'>;
    ele: HTMLButtonElement;
  };
  div: {
    attr: React.ComponentPropsWithoutRef<'div'>;
    ele: HTMLDivElement;
  };
  img: {
    attr: React.ComponentPropsWithoutRef<'img'>;
    ele: HTMLImageElement;
  };
  input: {
    attr: React.ComponentPropsWithoutRef<'input'>;
    ele: HTMLInputElement;
  };
  label: {
    attr: React.ComponentPropsWithoutRef<'label'>;
    ele: HTMLLabelElement;
  };
  span: {
    attr: React.ComponentPropsWithoutRef<'span'>;
    ele: HTMLSpanElement;
  };
};

type GetTagProps<T extends React.ElementType> = T extends keyof ITagProps ? ITagProps[T] : ITagProps['button'];

export type ButtonProps<
  T extends React.ElementType = 'button',
  A extends React.ComponentPropsWithoutRef<React.ElementType> = GetTagProps<T>['attr'],
> = Omit<A, 'color' | 'size'> &
  IComponentBaseProps & {
    shape?: ComponentShape;
    size?: ComponentSize;
    color?: ComponentColor;
    variant?: ComponentVariant | 'link';
    glass?: boolean;
    wide?: boolean;
    fullWidth?: boolean;
    responsive?: boolean;
    animation?: boolean;
    loading?: boolean;
    active?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    tag?: T;
  };
//  https://developer.mozilla.org/en-US/docs/Glossary/Void_element
const VoidElementList: React.ElementType[] = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'keygen',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

const nativeDisabledTags = new Set<React.ElementType>(['button', 'input']);
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      shape,
      size,
      variant,
      color,
      glass,
      startIcon,
      endIcon,
      wide,
      fullWidth,
      responsive,
      animation = true,
      loading,
      active,
      disabled,
      dataTheme,
      className,
      style,
      tag = 'button',
      ...props
    },
    ref,
  ): React.JSX.Element => {
    const Tag = tag;
    const supportsDisabledAttribute = nativeDisabledTags.has(Tag);
    const disabledProps = disabled
      ? supportsDisabledAttribute
        ? { disabled: true }
        : { tabIndex: -1, role: 'button', 'aria-disabled': true }
      : {};
    const classes = twMerge(
      'btn',
      className,
      clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
        'btn-xl': size === 'xl',
        'btn-lg': size === 'lg',
        'btn-md': size === 'md',
        'btn-sm': size === 'sm',
        'btn-xs': size === 'xs',
        'btn-circle': shape === 'circle',
        'btn-square': shape === 'square',
        'btn-soft': variant === 'soft',
        'btn-dash': variant === 'dash',
        'btn-outline': variant === 'outline',
        'btn-link': variant === 'link',
        'btn-neutral': color === 'neutral',
        'btn-primary': color === 'primary',
        'btn-secondary': color === 'secondary',
        'btn-accent': color === 'accent',
        'btn-info': color === 'info',
        'btn-success': color === 'success',
        'btn-warning': color === 'warning',
        'btn-error': color === 'error',
        'btn-ghost': color === 'ghost',
        glass,
        'btn-wide': wide,
        'btn-block': fullWidth,
        'btn-xs sm:btn-sm md:btn-md lg:btn-lg': responsive,
        'no-animation': !animation,
        'btn-active': active,
        'btn-disabled': disabled,
      }),
    );
    if (VoidElementList.includes(Tag)) {
      return <Tag {...props} {...disabledProps} ref={ref} data-theme={dataTheme} className={classes} style={style} />;
    } else {
      return (
        <Tag {...props} {...disabledProps} ref={ref} data-theme={dataTheme} className={classes} style={style}>
          {loading && <Loading size={size} />}
          {startIcon && !loading && startIcon}
          {children}
          {endIcon && endIcon}
        </Tag>
      );
    }
  },
);

Button.displayName = 'Button';

export default Button as <
  T extends React.ElementType = 'button',
  E extends HTMLElement = GetTagProps<T>['ele'],
  A extends React.ComponentPropsWithoutRef<React.ElementType> = GetTagProps<T>['attr'],
>(
  props: ButtonProps<T, A> & { ref?: React.Ref<E> },
) => React.JSX.Element;
