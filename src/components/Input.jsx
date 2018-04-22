import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #FFF;
  margin: auto;
  max-width: 600px;
  padding: 10px 0;
  width: 95%;
`;

const Input = styled.input`
  border: 1px solid #7F7E7E;
  margin: auto;
  padding: 10px 0;
  text-indent: 5px;
  width: 100%;
`;

export default props => (
  <Container>
    <Input type="text" name="search-field" placeholder={props.placeholder ? props.placeholder : 'Search'} value={props.value} onChange={props.onChange}/>
  </Container>
);