import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type CardTitleProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    tag?: React.ElementType;
  };

const CardTitle = React.forwardRef<HTMLElement, CardTitleProps>(
  ({ dataTheme, className, tag = 'div', ...props }, ref) => {
    const Tag = tag;

    return <Tag {...props} data-theme={dataTheme} className={twMerge('card-title', className)} ref={ref} />;
  },
);

export default CardTitle;
