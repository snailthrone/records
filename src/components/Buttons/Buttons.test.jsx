import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Buttons from './Buttons'

describe('<Buttons />', () => {
  const changeList = jest.fn()

  it('Renders correctly', () => {
    const tree = renderer.create(
      <Buttons
        changeList={changeList}
        searchContent={() => {}}
        value="Opeth"
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Handles the click events', () => {
    const wrapper = mount(
      <Buttons
        changeList={changeList}
        searchContent={() => {}}
        value="Opeth"
      />,
    )

    const buttons = wrapper.find('.app__button')
    buttons.forEach((button) => {
      button.simulate('click')
      expect(changeList).toHaveBeenCalledWith('collection')
    })
  })
})
