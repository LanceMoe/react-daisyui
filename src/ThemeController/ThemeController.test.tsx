import { render, screen } from '@testing-library/react';

import ThemeController from './ThemeController';

describe('ThemeController', () => {
  it('renders the theme-controller class and theme value', () => {
    render(<ThemeController theme="dark" aria-label="Dark theme" />);

    expect(screen.getByRole('checkbox', { name: 'Dark theme' })).toHaveClass('theme-controller');
    expect(screen.getByRole('checkbox', { name: 'Dark theme' })).toHaveAttribute('value', 'dark');
  });
});
