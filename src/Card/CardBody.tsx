import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

export type CardBodyProps = React.ComponentPropsWithoutRef<'div'> & IComponentBaseProps;

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(({ dataTheme, className, ...props }, ref) => (
  <div {...props} data-theme={dataTheme} className={twMerge('card-body', className)} ref={ref} />
));

export default CardBody;
