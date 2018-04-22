import React from 'react';
import styled from 'styled-components';

import Input from './Input';

const Buttons = styled.div`
  background: inherit;
  bottom: 0;
  left: 0;
  margin: auto;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const Button = styled.div`
  background: #222;
  color: #fff;
  display: inline-block;
  font-weight: bold;
  margin: auto;
  padding: 20px 0;
  text-align: center;
  top: 20px;
  width: ${100/3}%;
  &:hover {
    background: #7F7E7E;
    cursor: pointer;
  }
`;

const Label = styled.label``;

export default props => (
  <Buttons>
    <Input onChange={props.searchContent} value={props.value}/>
    <Button onClick={event => props.changeList('collection')}>Collection</Button>
    <Button onClick={event => props.changeList('upcoming')}>Upcoming</Button>
    <Button onClick={event => props.changeList('wantlist')}>Wishlist</Button>
  </Buttons>
);