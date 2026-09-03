import type { Meta, StoryFn as Story } from '@storybook/react';

import HoverGallery, { HoverGalleryProps } from '.';

export default { title: 'Data Display/Hover Gallery', component: HoverGallery } as Meta;

export const Default: Story<HoverGalleryProps> = (args) => (
  <HoverGallery {...args} className="max-w-60">
    <img src="https://picsum.photos/id/21/240/240" alt="Gallery item one" />
    <img src="https://picsum.photos/id/22/240/240" alt="Gallery item two" />
    <img src="https://picsum.photos/id/23/240/240" alt="Gallery item three" />
  </HoverGallery>
);

Default.args = {};
