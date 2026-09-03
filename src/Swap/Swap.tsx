import clsx from 'clsx';
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';
import { wrapWithElementIfInvalid } from '../utils';

export type SwapProps = Omit<React.ComponentPropsWithoutRef<'label'>, 'onClick' | 'onChange'> &
  IComponentBaseProps & {
    onElement: React.ReactNode | React.ReactNode[];
    offElement: React.ReactNode | React.ReactNode[];
    indeterminateElement?: React.ReactNode | React.ReactNode[];
    active?: boolean;
    rotate?: boolean;
    flip?: boolean;
    indeterminate?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    as?: 'label' | 'div';
    inputRef?: React.Ref<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
  };

const Swap = forwardRef<HTMLElement, SwapProps>((props: Readonly<SwapProps>, ref): React.JSX.Element => {
  const {
    onElement,
    offElement,
    indeterminateElement,
    active,
    rotate,
    flip,
    indeterminate,
    checked,
    defaultChecked,
    disabled,
    as = 'label',
    inputRef,
    dataTheme,
    className,
    onClick,
    onChange,
    'aria-label': ariaLabel,
    ...rest
  } = props;

  const classes = twMerge(
    'swap',
    className,
    clsx({
      'swap-active': active,
      'swap-rotate': rotate,
      'swap-flip': flip,
      'swap-disabled': disabled,
    }),
  );

  const internalInputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(inputRef, () => internalInputRef.current as HTMLInputElement);

  useEffect(() => {
    if (internalInputRef.current) {
      internalInputRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  const onEl = wrapWithElementIfInvalid({
    node: onElement,
    wrapper: <div />,
    props: { className: 'swap-on' },
  });

  const offEl = wrapWithElementIfInvalid({
    node: offElement,
    wrapper: <div />,
    props: { className: 'swap-off' },
  });

  const indeterminateEl = indeterminateElement
    ? wrapWithElementIfInvalid({
        node: indeterminateElement,
        wrapper: <div />,
        props: { className: 'swap-indeterminate' },
      })
    : null;

  if (as === 'div') {
    return (
      <div
        {...(rest as React.ComponentPropsWithoutRef<'div'>)}
        aria-label={ariaLabel}
        data-theme={dataTheme}
        className={classes}
        ref={ref as React.Ref<HTMLDivElement>}
      >
        {onEl}
        {offEl}
        {indeterminateEl}
      </div>
    );
  }

  const isControlled = checked !== undefined || active !== undefined;
  const computedChecked = checked !== undefined ? checked : active;

  return (
    <label
      {...rest}
      aria-label={ariaLabel}
      data-theme={dataTheme}
      className={classes}
      ref={ref as React.Ref<HTMLLabelElement>}
    >
      <input
        ref={internalInputRef}
        type="checkbox"
        disabled={disabled}
        {...(isControlled
          ? {
              checked: computedChecked ?? false,
              readOnly: onChange === undefined ? true : undefined,
            }
          : { defaultChecked })}
        onClick={onClick}
        onChange={onChange}
        aria-label={ariaLabel}
      />
      {onEl}
      {offEl}
      {indeterminateEl}
    </label>
  );
});

Swap.displayName = 'Swap';

export default Swap;
