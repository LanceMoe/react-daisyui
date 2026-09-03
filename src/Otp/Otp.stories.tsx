import type { Meta, StoryFn as Story } from '@storybook/react';

import Otp, { OtpProps } from '.';

export default { title: 'Data Input/OTP', component: Otp } as Meta;

export const Default: Story<OtpProps> = (args) => <Otp {...args} />;

Default.args = { length: 6, color: 'primary' };

export const Joined: Story<OtpProps> = (args) => <Otp {...args} />;

Joined.args = { length: 4, joined: true };
