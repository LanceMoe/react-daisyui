import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type CardActionsProps = React.ComponentPropsWithoutRef<'div'> & IComponentBaseProps;

const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(({ dataTheme, className, ...props }, ref) => (
  <div {...props} data-theme={dataTheme} className={twMerge('card-actions', className)} ref={ref} />
));

export default CardActions;
