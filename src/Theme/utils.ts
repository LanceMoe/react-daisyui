import React from 'react';

export const getThemeFromClosestAncestor = (ref: React.RefObject<HTMLElement | null>) => {
  if (!ref.current) {
    return;
  }
  const matches = ref.current.parentElement?.closest('[data-theme]');
  return matches?.getAttribute('data-theme') || undefined;
};
