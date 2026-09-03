import { render, screen } from '@testing-library/react';

import Theme from './';
import { useTheme } from './useTheme';

function ThemeWithInitialValue() {
  const { theme } = useTheme('corporate');

  return <span data-testid="current-theme">{theme}</span>;
}

describe('Theme', () => {
  it('Should render children elements', () => {
    render(
      <Theme>
        <div>Child component</div>
      </Theme>,
    );

    const childComponent = screen.getByText('Child component');
    expect(childComponent).toBeInTheDocument();
  });

  it('Should render with default theme if no dataTheme prop is provided', () => {
    render(<Theme data-testid="theme-div" />);

    const renderedDiv = screen.getByTestId('theme-div');
    expect(renderedDiv).toHaveAttribute('data-theme', 'light');
  });

  it('Should use closest ancestor theme if no dataTheme prop is provided', () => {
    render(
      <div data-theme="ancestor-theme" data-testid="ancestor-div">
        <Theme data-testid="nested-theme" />
      </div>,
    );

    const renderedDiv = screen.getByTestId('nested-theme');
    expect(renderedDiv).toHaveAttribute('data-theme', 'ancestor-theme');
  });

  it('Should pass down data-theme prop to the rendered div', () => {
    render(<Theme dataTheme="dark" data-testid="theme-div" />);

    const renderedDiv = screen.getByTestId('theme-div');
    expect(renderedDiv).toHaveAttribute('data-theme', 'dark');
  });

  it('Should update theme when dataTheme prop changes', () => {
    const { rerender } = render(<Theme dataTheme="light" data-testid="theme-div" />);

    const renderedDiv = screen.getByTestId('theme-div');
    expect(renderedDiv).toHaveAttribute('data-theme', 'light');

    rerender(<Theme dataTheme="dark" data-testid="theme-div" />);

    expect(renderedDiv).toHaveAttribute('data-theme', 'dark');
  });

  it('Should not overwrite context theme updates when dataTheme has not changed', () => {
    render(
      <Theme dataTheme="light" data-testid="theme-div">
        <ThemeWithInitialValue />
      </Theme>,
    );

    expect(screen.getByTestId('theme-div')).toHaveAttribute('data-theme', 'corporate');
    expect(screen.getByTestId('current-theme')).toHaveTextContent('corporate');
  });
});
