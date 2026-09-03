import type { Meta, StoryFn as Story } from '@storybook/react';

import type { ThemeControllerProps } from '.';
import ThemeController from '.';

export default { title: 'Utils/Theme Controller', component: ThemeController } as Meta;

export const Default: Story<ThemeControllerProps> = (args) => (
  <label className="label cursor-pointer gap-3">
    <span>Dark theme</span>
    <ThemeController {...args} theme="dark" aria-label="Use dark theme" />
  </label>
);

Default.args = {};
