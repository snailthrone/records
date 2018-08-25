/* eslint no-console: 0 */ // --> OFF
import React, { Component } from 'react'
import styled from 'styled-components'

import collection from '../../data/data_collection'

import Albums from '../Albums/Albums'
import Buttons from '../Buttons/Buttons'

import updateData from '../update-data'

const Container = styled.div`
  color: #222222;
  display: block;
  margin: auto;
  width: 100%;
`

const Header = styled.h1`
  background-color: #222222;
  color: #FFFFFF;
  font-family: 'Questrial', Verdana, sans-serif;
  font-size: 30px;
  margin: auto;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`
class App extends Component {
  state = {
    data: collection,
    value: '',
  }

  changeList = this.changeList.bind(this)

  searchContent = this.searchContent.bind(this)

  changeList(value) {
    this.setState(updateData(value))
  }

  searchContent(event) {
    const { value } = event.target
    this.setState(state => Object.assign(state, { value }))
  }

  render() {
    const { data, value } = this.state
    return (
      <Container>
        <Header>
          Records
        </Header>
        <Albums
          data={data}
          value={value}
        />
        <Buttons
          changeList={this.changeList}
          searchContent={this.searchContent}
          value={value}
        />
      </Container>
    )
  }
}

export default App
