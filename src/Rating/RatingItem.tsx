import React from 'react';

export type RatingItemProps = React.ComponentPropsWithoutRef<'input'>;

function RatingItem({ ...props }: RatingItemProps): React.JSX.Element {
  return <input {...props} type="checkbox" />;
}

export default RatingItem;
