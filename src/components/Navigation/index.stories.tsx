/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Navigation, { Props } from '.';

export default { title: 'Components/Navigation', component: Navigation };

const Template: Story<Props> = args => <Navigation {...args} />

export const Default = Template.bind({});

Default.args = {}
