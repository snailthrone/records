/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button, { Props } from '.';

export default { title: 'Components/Button', component: Button };

const Template: Story<Props> = args => <Button {...args} />

export const AddButton = Template.bind({});
AddButton.args = {
  children: <i className="material-icons">cloud_upload</i>
}
