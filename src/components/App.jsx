import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Albums  from './Albums';
import Buttons from './Buttons';

const Container = styled.div`
  color: #222;
  display: block;
  font-family: 'Questrial', Verdana, sans-serif;
`;

const Header = styled.h1`
  background: #222;
  color: #fff;
  font-size: 30px;
  margin: auto auto 20px auto;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`;

export default class App extends React.Component {

  constructor(props) {
    super(props);
		this.state = {
      buttons: null,
			path: this.props.path,
			collection: [],
			upcoming: [],
			whislist: [],
			data: [],
      value: ''
		};
    this.changeList = this.changeList.bind(this);
    this.searchContent = this.searchContent.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		axios.get(this.state.path + "/data/data_collection.json")
			.then(result => this.setState(state => Object.assign(state, {'collection': result.data}, {data: result.data})))
      .catch(error => console.error(error));
		axios.get(this.state.path + "/data/data_upcoming.json")
			.then(result => this.setState(state => Object.assign(state, {'upcoming': result.data})))
      .catch(error => console.error(error));
		axios.get(this.state.path + "/data/data_wantlist.json")
			.then(result => this.setState(state => Object.assign(state, {'whislist': result.data})))
      .catch(error => console.error(error));
	}

	changeList(value) {;
		if (value === 'collection') {
			this.setState(state => Object.assign(state, {'data': this.state.collection}));
		} else if (value === 'upcoming') {
			this.setState(state => Object.assign(state, {'data': this.state.upcoming}));
		} else {
			this.setState(state => Object.assign(state, {'data': this.state.whislist}));
		}
	}

  searchContent(event) {
    let value = event.target.value.toLowerCase();
    this.setState(state => Object.assign(state, {'value': value}));
  }

	render() {
    return (
      <Container>
        <Header>Records</Header>
        {
          this.state.data.length > 0 ? (
            <Albums data={this.state.data} value={this.state.value} />
          ) : (
            <p>Ladataan...</p>
          )
        }
        <Buttons changeList={this.changeList} searchContent={this.searchContent} value={this.state.value} />
      </Container>
    )
	}
}