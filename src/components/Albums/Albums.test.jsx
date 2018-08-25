import React from 'react'
import renderer from 'react-test-renderer'

import Albums from './Albums'

const sample = [{
  artist: 'Deafheaven',
  album: 'Ordinary Corrupt Human Love',
  date: '13.7.2018',
  bought: true,
}, {
  artist: 'Urfaust',
  album: 'Constellatory Practice',
  date: '25.5.2018',
  bought: false,
}]

it('Renders corretly', () => {
  const tree = renderer.create(
    <Albums
      data={sample}
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Renders corretly if value doesn\'t match', () => {
  const tree = renderer.create(
    <Albums
      data={sample}
      value="asdasdasdasd"
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
