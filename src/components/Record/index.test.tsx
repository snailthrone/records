import React from 'react';
import renderer from 'react-test-renderer';

import Record from './index'

const mockRecord = {
  title: 'Heavy as a Really Heavy Thing',
  performer: 'Strapping Young Lad',
  releaseDate: 1995,
  catalogId: '77092-2'
}

describe('Record', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Record {...mockRecord} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
