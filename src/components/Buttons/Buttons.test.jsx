import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Buttons from './Buttons'


it('Renders correctly', () => {
  const tree = renderer.create(
    <Buttons
      changeList={() => {}}
      searchContent={() => {}}
      value="Opeth"
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Property methods work', () => {
  const wrapper = shallow(
    <Buttons
      changeList={() => {}}
      searchContent={() => {}}
      value="Opeth"
    />,
  )
  const instance = wrapper.instance()
  console.log(instance)
  // expect(wrapper.prop('value')).toEqual('Opeth')
})
