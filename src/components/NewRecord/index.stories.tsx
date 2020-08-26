import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import NewRecord, { Props } from '.';

export default { title: 'Components/NewRecord', component: NewRecord } as Meta;

const Template: Story<Props> = args => <NewRecord {...args} />

export const Default = Template.bind({});
