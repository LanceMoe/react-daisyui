import React from 'react';

export type RatingItemProps = React.InputHTMLAttributes<HTMLInputElement>;

function RatingItem({ ...props }: RatingItemProps): React.JSX.Element {
  return <input {...props} type="checkbox" />;
}

export default RatingItem;
