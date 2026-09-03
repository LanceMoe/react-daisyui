import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';
import type { IndicatorItemProps as ItemProps } from './IndicatorItem';
import IndicatorItem from './IndicatorItem';

export type IndicatorItemProps = ItemProps;
export type IndicatorProps = React.ComponentPropsWithoutRef<'div'> & IComponentBaseProps;

const classesFn = ({ className }: Pick<IndicatorProps, 'className'> = {}) => twMerge('indicator', className);
const Indicator = React.forwardRef<HTMLDivElement, IndicatorProps>(
  ({ children, className, dataTheme, ...props }, ref): React.JSX.Element => {
    return (
      <div {...props} data-theme={dataTheme} className={classesFn({ className })} ref={ref}>
        {children}
      </div>
    );
  },
);

Indicator.displayName = 'Indicator';
export default Object.assign(Indicator, {
  Item: IndicatorItem,
  className: classesFn,
});
