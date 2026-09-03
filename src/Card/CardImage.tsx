import React from 'react';

export type CardImageProps = React.ComponentPropsWithoutRef<'img'>;

const CardImage = React.forwardRef<HTMLElement, CardImageProps>(({ ...props }, ref) => {
  return (
    <figure ref={ref}>
      <img {...props} />
    </figure>
  );
});

export default CardImage;
