import React from 'react';

export type TableBodyProps = React.ComponentPropsWithoutRef<'tbody'>;

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, ...props }, ref): React.JSX.Element => {
    return (
      <tbody {...props} ref={ref}>
        {children}
      </tbody>
    );
  },
);
export default TableBody;
