/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Login, { Props } from '.';

export default { title: 'Components/Login', component: Login };

const Template: Story<Props> = args => <Login {...args} />

export const Default = Template.bind({});

Default.args = {}
