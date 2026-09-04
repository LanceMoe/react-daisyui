import type { Meta, StoryFn as Story } from '@storybook/react';
import React from 'react';

import type { CodeMockupProps } from '.';
import CodeMockup from '.';

const meta: Meta = {
  title: 'Mockup/CodeMockup',
  component: CodeMockup,
  subcomponents: { 'CodeMockup.Line': CodeMockup.Line },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story<CodeMockupProps> = (args) => {
  return (
    <CodeMockup {...args}>
      <CodeMockup.Line>pnpm add daisyui @lancemoe/react-daisyui</CodeMockup.Line>
    </CodeMockup>
  );
};

export const LinePrefix: Story<CodeMockupProps> = (args) => {
  return (
    <CodeMockup {...args}>
      <CodeMockup.Line dataPrefix="$">pnpm add daisyui @lancemoe/react-daisyui</CodeMockup.Line>
    </CodeMockup>
  );
};

export const MultiLine: Story<CodeMockupProps> = (args) => {
  return (
    <CodeMockup {...args}>
      <CodeMockup.Line>pnpm add daisyui @lancemoe/react-daisyui</CodeMockup.Line>
      <CodeMockup.Line className="text-warning">installing...</CodeMockup.Line>
      <CodeMockup.Line className="text-success">Done!</CodeMockup.Line>
    </CodeMockup>
  );
};

export const HighlightedLine: Story<CodeMockupProps> = (args) => {
  return (
    <CodeMockup {...args}>
      <CodeMockup.Line>pnpm add daisyui @lancemoe/react-daisyui</CodeMockup.Line>
      <CodeMockup.Line>installing...</CodeMockup.Line>
      <CodeMockup.Line status="warning">Error!</CodeMockup.Line>
    </CodeMockup>
  );
};

export const LongLineWithScroll: Story<CodeMockupProps> = (args) => {
  return (
    <CodeMockup {...args}>
      <CodeMockup.Line dataPrefix="~">
        Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.
      </CodeMockup.Line>
    </CodeMockup>
  );
};

export const WithoutPrefix: Story<CodeMockupProps> = (args) => {
  return (
    <CodeMockup {...args}>
      <CodeMockup.Line dataPrefix={false}>without prefix</CodeMockup.Line>
    </CodeMockup>
  );
};
