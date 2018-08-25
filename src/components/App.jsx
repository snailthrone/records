/* eslint no-console: 0 */ // --> OFF
import axios from 'axios'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import Albums from './Albums'
import Buttons from './Buttons'

const Container = styled.div`
  color: #222222;
  display: block;
  font-family: 'Questrial', Verdana, sans-serif;
`

const Header = styled.h1`
  background-color: #222222;
  color: #FFFFFF;
  font-size: 30px;
  margin: auto auto 20px auto;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      upcoming: [],
      whislist: [],
      data: [],
      value: '',
    }
    this.changeList = this.changeList.bind(this)
    this.searchContent = this.searchContent.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    const { path } = this.props
    axios.get(`${path}/data/data_collection.json`)
      .then(({ data }) => {
        this.setState(state => Object.assign(state, { collection: data, data }))
      })
      .catch(error => console.error(error))
    axios.get(`${path}/data/data_upcoming.json`)
      .then(({ data }) => {
        this.setState(state => Object.assign(state, { upcoming: data }))
      })
      .catch(error => console.error(error))
    axios.get(`${path}/data/data_wantlist.json`)
      .then(({ data }) => {
        this.setState(state => Object.assign(state, { whislist: data }))
      })
      .catch(error => console.error(error))
  }

  changeList(value) {
    const { collection, upcoming, whislist } = this.state
    if (value === 'collection') {
      this.setState(state => Object.assign(state, { data: collection }))
    } else if (value === 'upcoming') {
      this.setState(state => Object.assign(state, { data: upcoming }))
    } else {
      this.setState(state => Object.assign(state, { data: whislist }))
    }
  }

  searchContent(event) {
    const value = event.target.value.toLowerCase()
    this.setState(state => Object.assign(state, { value }))
  }

  render() {
    const { data, value } = this.state
    return (
      <Container>
        <Header>
          Records
        </Header>
        {
          data.length > 0 ? (
            <Albums
              data={data}
              value={value}
            />
          ) : (
            <p>Ladataan...</p>
          )
        }
        <Buttons
          changeList={this.changeList}
          searchContent={this.searchContent}
          value={value}
        />
      </Container>
    )
  }
}

App.propTypes = {
  path: PropTypes.string,
}

App.defaultProps = {
  path: '',
}

export default App
