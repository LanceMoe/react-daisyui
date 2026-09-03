import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type CountdownProps = React.ComponentPropsWithoutRef<'span'> &
  IComponentBaseProps & {
    value: number;
  };

function Countdown({ value, dataTheme, className, style, ...props }: CountdownProps): React.JSX.Element {
  const classes = twMerge('countdown', className);

  const displayedValue = Number.isFinite(value) ? Math.min(99, Math.max(0, value)) : 0;
  const countdownStyle: React.CSSProperties = { ...style, '--value': displayedValue } as React.CSSProperties;

  return (
    <span
      role="timer"
      aria-live={props['aria-live'] ?? 'polite'}
      aria-label={props['aria-label'] ?? String(displayedValue)}
      {...props}
      data-theme={dataTheme}
      className={classes}
    >
      <span style={countdownStyle}>{displayedValue}</span>
    </span>
  );
}

export default Countdown;
