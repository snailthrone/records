import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Input from '../Input/Input'

const Wrapper = styled.div`
  background-color: inherit;
  bottom: 0;
  left: 0;
  margin: auto;
  position: fixed;
  width: 100%;
  z-index: 100;
`

const Button = styled.div`
  background-color: #222222;
  color: #ffffff;
  display: inline-block;
  font-family: 'Questrial', Verdana, sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin: auto;
  padding: 20px 0;
  text-align: center;
  width: ${100 / 4}%;
  &:hover {
    background: #7F7E7E;
    cursor: pointer;
  }
`

const Buttons = ({ changeList, searchContent, value }) => (
  <Wrapper>
    <Input
      className="app__search-field"
      onChange={searchContent}
      value={value}
    />
    <Button
      className="app__button"
      onClick={() => changeList('collection')}
    >
      CD
    </Button>
    <Button
      className="app__button"
      onClick={() => changeList('upcoming')}
    >
      Coming
    </Button>
    <Button
      className="app__button"
      onClick={() => changeList('wishlist')}
    >
      Wishlist
    </Button>
    <Button
      className="app__button"
      onClick={() => changeList('vinyls')}
    >
      Vinyls
    </Button>
  </Wrapper>
)

Buttons.propTypes = {
  changeList: PropTypes.func.isRequired,
  searchContent: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Buttons
