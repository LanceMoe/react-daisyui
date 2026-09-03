import React from 'react';
import { twMerge } from 'tailwind-merge';

export const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

// Returns true if an element is a react fragment
export const isReactFragment = (node: React.ReactNode | typeof React.Fragment) => {
  if (!node) {
    return false;
  }

  if ((node as React.ReactElement)?.type) {
    return (node as React.ReactElement)?.type === React.Fragment;
  }

  return node === React.Fragment;
};

// If an invalid element or fragment is passed in as the node, wrap it with the wrapper and add props
// If a valid element is passed, add the props
export const wrapWithElementIfInvalid = ({
  node,
  wrapper,
  props = {},
}: {
  node: React.ReactNode;
  wrapper: React.ReactElement;
  props?: React.ComponentPropsWithoutRef<React.ElementType> & Record<string, unknown>;
}) => {
  const wrapperElement = wrapper as React.ReactElement<Record<string, unknown>>;

  if (!node) {
    return React.cloneElement(wrapperElement, props);
  } else if (!React.isValidElement(node)) {
    return React.cloneElement(wrapperElement, props, node);
  } else if (isReactFragment(node)) {
    const element = node as React.ReactElement<{
      className?: string;
      children?: React.ReactNode;
      [key: string]: unknown;
    }>;
    return React.cloneElement(
      wrapperElement,
      { ...props, className: twMerge(element.props?.className, props?.className) },
      element.props.children,
    );
  } else {
    const element = node as React.ReactElement<{ className?: string }>;
    return React.cloneElement(element, {
      ...props,
      className: twMerge(element.props?.className, props?.className),
    });
  }
};

// Returns true if there is a single, string child element
export const isSingleStringChild = (children?: React.ReactNode) => {
  return (
    children &&
    React.Children.count(children) === 1 &&
    React.isValidElement(children) &&
    typeof (children as React.ReactElement<{ children?: React.ReactNode }>).props.children === 'string'
  );
};
