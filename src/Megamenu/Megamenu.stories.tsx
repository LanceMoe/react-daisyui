import type { Meta, StoryFn as Story } from '@storybook/react';

import Megamenu, { MegamenuProps } from '.';

export default { title: 'Navigation/Megamenu', component: Megamenu } as Meta;

export const Default: Story<MegamenuProps> = (args) => (
  <Megamenu {...args} className="w-full border border-base-300 p-2">
    <button className="btn btn-ghost">Products</button>
    <button className="btn btn-ghost">Solutions</button>
    <button className="btn btn-ghost">Resources</button>
  </Megamenu>
);

Default.args = { variant: 'wide', responsive: true };
