import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { CollapseProps } from './Collapse';
import { Summary } from './CollapseTitle';

export type DetailsProps = Omit<CollapseProps<'details'>, 'checkbox' | 'onOpen' | 'onClose' | 'onToggle'>;

const classesFn = ({ className, icon, open }: Pick<DetailsProps, 'className' | 'icon' | 'open'>) =>
  twMerge(
    'collapse',
    className,
    clsx({
      'collapse-arrow': icon === 'arrow',
      'collapse-plus': icon === 'plus',
      'collapse-open': open === true,
      'collapse-close': open === false,
    }),
  );

const Details = React.forwardRef<HTMLDetailsElement, DetailsProps>(
  ({ children, icon, open, dataTheme, className, ...props }, ref): React.JSX.Element => {
    return (
      <details {...props} ref={ref} data-theme={dataTheme} className={classesFn({ className, icon, open })} open={open}>
        {children}
      </details>
    );
  },
);

Details.displayName = 'Details';
export default Object.assign(Details, { Title: Summary });
