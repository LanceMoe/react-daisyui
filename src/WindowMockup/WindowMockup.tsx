import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { bgColors, brandColors, componentStatuses } from '../constants';
import type { IComponentBaseProps } from '../types';

export const windowMockupColors = [...bgColors, ...brandColors, ...componentStatuses] as const;

type WindowMockupColors = (typeof windowMockupColors)[number];

const borderClasses: Record<WindowMockupColors, string> = {
  'base-100': 'border-base-100',
  'base-200': 'border-base-200',
  'base-300': 'border-base-300',
  neutral: 'border-neutral',
  primary: 'border-primary',
  secondary: 'border-secondary',
  accent: 'border-accent',
  info: 'border-info',
  success: 'border-success',
  warning: 'border-warning',
  error: 'border-error',
};

const backgroundClasses: Record<WindowMockupColors, string> = {
  'base-100': 'bg-base-100',
  'base-200': 'bg-base-200',
  'base-300': 'bg-base-300',
  neutral: 'bg-neutral',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
  info: 'bg-info',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
};

export type WindowMockupProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    frameColor?: WindowMockupColors;
    backgroundColor?: WindowMockupColors;
    border?: boolean;
    borderColor?: WindowMockupColors;
  };

const WindowMockup = forwardRef<HTMLDivElement, WindowMockupProps>(
  (
    { border, borderColor, backgroundColor, frameColor, dataTheme, className, children, ...props },
    ref,
  ): React.JSX.Element => {
    // Set border color to framecolor or 'bg-base-300', if border color is not defined
    const borderColorValue = borderColor ? borderColor : frameColor || 'base-300';

    const classes = twMerge(
      'mockup-window',
      borderClasses[borderColorValue],
      border && 'border',
      frameColor && backgroundClasses[frameColor],
      className,
    );

    // If border is true, then we need to add the border-t and padding classes to the children
    // if more than one child is passed in, or the single child is not a valid element, then we need to wrap the child/children in a div

    const numChildren = React.Children.count(children);
    const firstChild =
      numChildren > 0
        ? (React.Children.toArray(children)[0] as React.ReactElement<{ className?: string }> | undefined)
        : undefined;

    // List of classes that child element will have
    const innerClasses = clsx(
      backgroundColor && backgroundClasses[backgroundColor],
      border && `border-t ${borderClasses[borderColorValue]}`,
      'p-4',
    );

    // Add the innerClasses to the child element, merging classNames if existing, or wrapping with div and adding innerClasses
    const innerEl =
      numChildren === 1 && firstChild && React.isValidElement(firstChild) ? (
        React.cloneElement(firstChild, {
          className: twMerge(innerClasses, firstChild.props.className),
        })
      ) : (
        <div className={innerClasses}>{children}</div>
      );

    return (
      <div aria-label="Window mockup" {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {innerEl}
      </div>
    );
  },
);

WindowMockup.displayName = 'WindowMockup';

export default WindowMockup;
