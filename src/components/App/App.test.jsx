import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import collection from '../../data/data_collection'
import wishlist from '../../data/data_wantlist'

import App from './App'

it('Renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('State.value should change', () => {
  const wrapper = shallow(<App />)
  const sample = {
    target: {
      value: 'upcoming',
    },
  }
  expect(wrapper.state().value).toEqual('')
  wrapper.instance().searchContent(sample)
  expect(wrapper.state().value).toEqual('upcoming')
})

it('State.data should change', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.state().data).toEqual(collection)
  wrapper.instance().changeList('wishlist')
  expect(wrapper.state().data).toEqual(wishlist)
})
