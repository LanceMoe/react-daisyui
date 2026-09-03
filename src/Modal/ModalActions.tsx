import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

type ModalActionsProps = React.ComponentPropsWithoutRef<'div'> & IComponentBaseProps;

const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(({ children, dataTheme, className, ...props }, ref) => {
  const classes = twMerge('modal-action', className);
  return (
    <div {...props} data-theme={dataTheme} className={classes} ref={ref}>
      {children}
    </div>
  );
});

ModalActions.displayName = 'ModalActions';

export default ModalActions;
