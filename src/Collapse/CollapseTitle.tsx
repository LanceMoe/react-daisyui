import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

export type CollapseTitleProps<T extends React.ElementType = 'div'> = React.ComponentPropsWithoutRef<T> &
  IComponentBaseProps;

const classesFn = ({ className }: Pick<CollapseTitleProps, 'className'>) => twMerge('collapse-title', className);

function CollapseTitle({ children, dataTheme, className, ...props }: CollapseTitleProps): React.JSX.Element {
  return (
    <div {...props} data-theme={dataTheme} className={classesFn({ className })}>
      {children}
    </div>
  );
}

export type SummaryProps = CollapseTitleProps<'summary'>;
export const Summary = React.forwardRef<HTMLElement, SummaryProps>(
  ({ children, dataTheme, className, ...props }, ref): React.JSX.Element => {
    return (
      <summary {...props} ref={ref} data-theme={dataTheme} className={classesFn({ className })}>
        {children}
      </summary>
    );
  },
);

export default CollapseTitle;
