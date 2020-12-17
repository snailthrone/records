import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Record, { Props } from '.';

export default { title: 'Components/Record', component: Record } as Meta;

const Template: Story<Props> = args => <Record {...args} />

export const Default = Template.bind({});
Default.args = {
  title: 'Heavy as a Really Heavy Thing',
  performer: 'Strapping Young Lad',
  releaseDate: 1995,
  catalogId: '77092-2'
}
