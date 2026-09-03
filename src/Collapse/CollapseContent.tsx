import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

export type CollapseContentProps = React.ComponentPropsWithoutRef<'div'> & IComponentBaseProps;

function CollapseContent({ children, dataTheme, className, ...props }: CollapseContentProps): React.JSX.Element {
  const classes = twMerge('collapse-content', className);

  return (
    <div {...props} data-theme={dataTheme} className={classes}>
      {children}
    </div>
  );
}

export default CollapseContent;
