import { render } from '@testing-library/react';
import React, { Fragment } from 'react';

import { isReactFragment, isSingleStringChild, toTitleCase, wrapWithElementIfInvalid } from './utils';

describe('utils', () => {
  describe('toTitleCase', () => {
    it('capitalizes the first letter of each word', () => {
      expect(toTitleCase('hello world')).toBe('Hello World');
      expect(toTitleCase('REACT DAISYUI')).toBe('React Daisyui');
    });
  });

  describe('isReactFragment', () => {
    it('returns true for React.Fragment elements', () => {
      expect(isReactFragment(<Fragment>test</Fragment>)).toBe(true);
      expect(isReactFragment(<>test</>)).toBe(true);
      expect(isReactFragment(Fragment)).toBe(true);
    });

    it('returns false for non-fragment elements or falsy values', () => {
      expect(isReactFragment(<div>test</div>)).toBe(false);
      expect(isReactFragment('string')).toBe(false);
      expect(isReactFragment(null)).toBe(false);
      expect(isReactFragment(undefined)).toBe(false);
    });
  });

  describe('wrapWithElementIfInvalid', () => {
    it('preserves and renders number 0 instead of swallowing it', () => {
      const el = wrapWithElementIfInvalid({
        node: 0,
        wrapper: <div data-testid="zero-wrapper" />,
        props: { className: 'test-class' },
      });
      const { getByTestId } = render(el);
      const wrapper = getByTestId('zero-wrapper');
      expect(wrapper).toHaveTextContent('0');
      expect(wrapper).toHaveClass('test-class');
    });

    it('handles empty string and strings correctly', () => {
      const stringEl = wrapWithElementIfInvalid({
        node: 'hello',
        wrapper: <div data-testid="string-wrapper" />,
        props: { className: 'test-class' },
      });
      const { getByTestId } = render(stringEl);
      expect(getByTestId('string-wrapper')).toHaveTextContent('hello');
    });

    it('handles null, undefined, and boolean values without crashing', () => {
      const nullEl = wrapWithElementIfInvalid({
        node: null,
        wrapper: <div data-testid="null-wrapper" />,
        props: { className: 'test-class' },
      });
      const { getByTestId } = render(nullEl);
      expect(getByTestId('null-wrapper')).toBeEmptyDOMElement();
      expect(getByTestId('null-wrapper')).toHaveClass('test-class');

      const falseEl = wrapWithElementIfInvalid({
        node: false,
        wrapper: <div data-testid="false-wrapper" />,
        props: { className: 'test-class' },
      });
      const { getByTestId: getByTestIdFalse } = render(falseEl);
      expect(getByTestIdFalse('false-wrapper')).toBeEmptyDOMElement();
    });

    it('clones valid elements directly and merges className', () => {
      const el = wrapWithElementIfInvalid({
        node: <span className="custom-span">Span Text</span>,
        wrapper: <div />,
        props: { className: 'merged-class' },
      });
      const { getByText } = render(el);
      const span = getByText('Span Text');
      expect(span.tagName).toBe('SPAN');
      expect(span).toHaveClass('custom-span');
      expect(span).toHaveClass('merged-class');
    });

    it('wraps React.Fragment and preserves key and children', () => {
      const el = wrapWithElementIfInvalid({
        node: (
          <Fragment key="frag-key">
            <span>Fragment Child</span>
          </Fragment>
        ),
        wrapper: <div data-testid="fragment-wrapper" />,
        props: { className: 'frag-wrapper-class' },
      });
      expect(el.key).toBe('frag-key');
      const { getByTestId } = render(el);
      const wrapper = getByTestId('fragment-wrapper');
      expect(wrapper).toHaveClass('frag-wrapper-class');
      expect(wrapper).toHaveTextContent('Fragment Child');
    });

    it('wraps array of nodes inside wrapper', () => {
      const el = wrapWithElementIfInvalid({
        node: [<span key="1">1</span>, <span key="2">2</span>],
        wrapper: <div data-testid="array-wrapper" />,
        props: { className: 'array-class' },
      });
      const { getByTestId } = render(el);
      const wrapper = getByTestId('array-wrapper');
      expect(wrapper).toHaveTextContent('12');
      expect(wrapper).toHaveClass('array-class');
    });
  });

  describe('isSingleStringChild', () => {
    it('returns true when element has a single string child', () => {
      expect(isSingleStringChild(<span>text</span>)).toBe(true);
    });

    it('returns false when element does not have a single string child', () => {
      expect(isSingleStringChild('plain string')).toBe(false);
      expect(
        isSingleStringChild(
          <span>
            <span>nested</span>
          </span>,
        ),
      ).toBe(false);
      expect(isSingleStringChild(null)).toBe(false);
    });
  });
});
