import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';
import BreadcrumbsItem, { BreadcrumbsItemProps } from './BreadcrumbsItem';

export type BreadcrumbsProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    children?: ReactElement<BreadcrumbsItemProps> | ReactElement<BreadcrumbsItemProps>[];
    innerRef?: React.Ref<HTMLUListElement>;
    innerProps?: React.ComponentPropsWithoutRef<'ul'>;
  };

const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ children, dataTheme, className, innerProps, innerRef, ...props }, ref): React.JSX.Element => {
    const classes = twMerge('breadcrumbs', 'text-sm', className);

    return (
      <div role="navigation" aria-label="Breadcrumbs" {...props} data-theme={dataTheme} className={classes} ref={ref}>
        <ul {...innerProps} ref={innerRef}>
          {children}
        </ul>
      </div>
    );
  },
);

export default Object.assign(Breadcrumbs, { Item: BreadcrumbsItem });
