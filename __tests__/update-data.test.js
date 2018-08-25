import updateData from '../src/components/update-data'

import collection from '../src/data/data_collection'
import upcoming from '../src/data/data_upcoming'
import vinyls from '../src/data/data_vinyls'
import wishlist from '../src/data/data_wantlist'

test('Returns CDs', () => {
  expect(updateData('collection')).toEqual({ data: collection })
})

test('Returns upcoming albums', () => {
  expect(updateData('upcoming')).toEqual({ data: upcoming })
})

test('Returns vinyls', () => {
  expect(updateData('vinyls')).toEqual({ data: vinyls })
})

test('Returns wishlist', () => {
  expect(updateData('wishlist')).toEqual({ data: wishlist })
})
