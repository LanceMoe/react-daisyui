import clsx from 'clsx';
import React, { cloneElement, createRef, forwardRef, ReactElement, RefObject, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '../Button';
import { IComponentBaseProps } from '../types';
import CarouselItem, { CarouselItemProps, CarouselItemWidth } from './CarouselItem';

export type CarouselProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    children: ReactElement<CarouselItemProps>[];
    display?: 'slider' | 'numbered' | 'sequential';
    snap?: 'start' | 'center' | 'end';
    vertical?: boolean;
    width?: CarouselItemWidth;
    buttonStyle?: (value: string) => React.ReactElement;
  };

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    { children, display = 'slider', snap, vertical, width, buttonStyle, dataTheme, className, ...props },
    ref,
  ): React.JSX.Element => {
    const classes = twMerge(
      'carousel',
      className,
      clsx({
        'carousel-start': snap === 'start',
        'carousel-center': snap === 'center',
        'carousel-end': snap === 'end',
        'carousel-vertical': vertical,
        'w-full': display !== 'slider',
      }),
    );

    const [itemRefs, setItemRefs] = useState<RefObject<HTMLDivElement | null>[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const newRefs: RefObject<HTMLDivElement | null>[] = [];
      Array.from({ length: children.length }, () => {
        newRefs.push(createRef<HTMLDivElement>());
      });
      setItemRefs(newRefs);
    }, [children]);

    const scrollToIndex = (index: number) => {
      itemRefs[index].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: snap,
      });
      setActiveIndex(index);
    };

    return (
      <>
        <div role="listbox" aria-label="Image carousel" {...props} ref={ref} data-theme={dataTheme} className={classes}>
          {children.map((child, i) => {
            return cloneElement(child, {
              key: i,
              innerRef: itemRefs[i],
              index: i + 1,
              children: child.props.children,
              src: child.props.src,
              alt: child.props.alt,
              width: display !== 'slider' ? 'full' : width,
              hasButtons: display === 'sequential',
              buttonStyle,
              onPrev: () => scrollToIndex(i - 1 < 0 ? children.length - 1 : i - 1),
              onNext: () => scrollToIndex(i + 1 > children.length - 1 ? 0 : i + 1),
              ...child.props,
            });
          })}
        </div>
        {display === 'numbered' && (
          <div className="flex justify-center w-full py-2 gap-2">
            {children.map((_, i) => {
              if (buttonStyle != null) {
                const button = buttonStyle((i + 1).toString()) as React.ReactElement<{
                  onClick?: React.MouseEventHandler;
                }>;
                return cloneElement(button, {
                  key: i,
                  onClick: () => scrollToIndex(i),
                });
              }

              return (
                <Button active={i === activeIndex} key={i} onClick={() => scrollToIndex(i)}>
                  {i + 1}
                </Button>
              );
            })}
          </div>
        )}
      </>
    );
  },
);

export default Object.assign(Carousel, { Item: CarouselItem });
