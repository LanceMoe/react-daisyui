import type { Meta, StoryFn as Story } from '@storybook/react';

import Hover3d, { Hover3dProps } from '.';

export default { title: 'Data Display/Hover 3D', component: Hover3d } as Meta;

export const Default: Story<Hover3dProps> = (args) => (
  <Hover3d {...args} className="mx-2 my-12">
    <figure className="max-w-80 rounded-box">
      <img src="https://picsum.photos/320/200" alt="Sample hover card" />
    </figure>
  </Hover3d>
);

Default.args = {};
