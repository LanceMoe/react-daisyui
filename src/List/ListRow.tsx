import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type ListRowProps = React.ComponentPropsWithoutRef<'li'> & IComponentBaseProps;

const ListRow = forwardRef<HTMLLIElement, ListRowProps>(({ children, dataTheme, className, ...props }, ref) => {
  return (
    <li {...props} ref={ref} data-theme={dataTheme} className={twMerge('list-row', className)}>
      {children}
    </li>
  );
});

ListRow.displayName = 'ListRow';

export default ListRow;
