import { render, screen } from '@testing-library/react';
import { createRef } from 'react';

import Artboard from './Artboard';

describe('Artboard', () => {
  it('renders a default state', () => {
    render(<Artboard>Test</Artboard>);
    expect(screen.getByLabelText('Artboard')).toBeTruthy();
  });

  it('renders a size', () => {
    render(<Artboard size={1}>Test</Artboard>);
    expect(screen.getByLabelText('Artboard')).toHaveClass('w-[320px]', 'h-[568px]');
  });

  it('renders a direction', () => {
    render(
      <Artboard size={1} horizontal>
        Test
      </Artboard>,
    );
    expect(screen.getByLabelText('Artboard')).toHaveClass('w-[568px]', 'h-[320px]');
  });

  it.each`
    demo         | expected
    ${undefined} | ${true}
    ${true}      | ${true}
    ${false}     | ${false}
  `('renders a demo', ({ demo, expected }) => {
    render(<Artboard demo={demo}>Test</Artboard>);
    if (expected) {
      expect(screen.getByLabelText('Artboard')).toHaveClass('p-4');
    } else {
      expect(screen.getByLabelText('Artboard')).not.toHaveClass('p-4');
    }
  });

  it('should be able to access the native div', () => {
    const artboardRef = createRef<HTMLDivElement>();
    render(<Artboard ref={artboardRef}>Test</Artboard>);
    expect(screen.getByLabelText('Artboard')).toEqual(artboardRef.current);
  });
});
