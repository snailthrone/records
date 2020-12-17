/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Tools, { Props } from '.';

export default { title: 'Components/Tools', component: Tools };

const Template: Story<Props> = args => <Tools {...args} />

export const Default = Template.bind({});

Default.args = {}
