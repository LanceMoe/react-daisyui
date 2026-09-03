import React from 'react';

export type BreadcrumbsItemProps = React.ComponentPropsWithoutRef<'li'> & {
  href?: string;
};

const BreadcrumbsItem = React.forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ children, href, ...props }, ref): React.JSX.Element => {
    return (
      <li {...props} ref={ref}>
        {href ? <a href={href}>{children}</a> : <>{children}</>}
      </li>
    );
  },
);

export default BreadcrumbsItem;
