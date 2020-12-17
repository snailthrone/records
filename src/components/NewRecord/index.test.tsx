import React from 'react';
import renderer from 'react-test-renderer';
import NewRecord from './index';

describe('New Record', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NewRecord />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
