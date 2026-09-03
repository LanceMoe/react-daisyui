import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';
import ListRow, { type ListRowProps } from './ListRow';

export type { ListRowProps };
export type ListProps = ComponentPropsWithoutRef<'ul'> & IComponentBaseProps;

const List = forwardRef<HTMLUListElement, ListProps>(({ children, dataTheme, className, ...props }, ref) => {
  return (
    <ul {...props} ref={ref} data-theme={dataTheme} className={twMerge('list', className)}>
      {children}
    </ul>
  );
});

List.displayName = 'List';

export default Object.assign(List, { Row: ListRow });
