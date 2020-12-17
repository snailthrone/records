/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import __COMPONENT__, { Props } from '.';

export default { title: 'Components/__COMPONENT__', component: __COMPONENT__ };

const Template: Story<Props> = args => <__COMPONENT__ {...args} />

export const Default = Template.bind({});

Default.args = {}
