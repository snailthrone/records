import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #FFFFFF;
  margin: auto;
  max-width: 600px;
  padding: 10px 0;
  width: 95%;
`

const Input = styled.input`
  border: 1px solid #7F7E7E;
  margin: auto;
  padding: 10px 0;
  text-indent: 5px;
  width: 100%;
`

const SearchInput = ({ onChange, placeholder, value }) => (
  <Container>
    <Input
      type="text"
      name="search-field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </Container>
)

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
}

SearchInput.defaultProps = {
  placeholder: 'Search',
}

export default SearchInput
