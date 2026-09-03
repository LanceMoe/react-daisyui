import type { Meta, StoryFn as Story } from '@storybook/react';

import Status, { StatusProps } from '.';

export default { title: 'Data Display/Status', component: Status } as Meta;

export const Colors: Story<StatusProps> = (args) => (
  <div className="flex items-center gap-4">
    <Status {...args} color="success" aria-label="Online" />
    <Status {...args} color="warning" aria-label="Away" />
    <Status {...args} color="error" aria-label="Offline" />
  </div>
);

Colors.args = { size: 'md' };
