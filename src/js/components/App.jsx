/*jshint esversion: 6 */
import React from 'react';
import objectAssign from 'object-assign';
import Axios from 'axios';
import styled from 'styled-components';
import Content from './Content.jsx';

const AppContent = styled.div`
  color: #222;
  display: block;
  font-family: 'Questrial', Verdana, sans-serif;
`;

const Selectors = styled.div`
  background: inherit;
  bottom: 0;
  margin: auto;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const Selector = styled.div`
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

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			path: window.location.href,
			collection: [],
			upcoming: [],
			wantlist: [],
			content: [],
			value: ''
		};
		this.searchContent = this.searchContent.bind(this);
	}
	componentDidMount() {
		this.getData();
	}
	getData() {
		let url = window.location.href;
		let data;
		this.serverRequest = 
			Axios
				.get(url + "/data/data_collection.json")
				.then((result) => {
					data = result.data
					this.setState((state)=>{
						objectAssign(state, {'collection': data}, {content: data})
					});
				});
			Axios
				.get(url + "/data/data_upcoming.json")
				.then((result) => {
					data = result.data;
					this.setState((state)=>{
						objectAssign(state, {'upcoming': data})
					});
				});
			Axios
				.get(url + "/data/data_wantlist.json")
				.then((result) => {
					data = result.data;
					this.setState((state)=>{
						objectAssign(state, {'wantlist': data})
					});
				});
	}
	searchContent(event) {
		let value = event.target.value.toLowerCase();
		this.setState((state) => {
			objectAssign(state, {'value': value})
		});
	}
	changeList(event) {
		if (event === 'collection') {
			this.setState((state)=>{
				objectAssign(state, {'content': this.state.collection})
			});
		}
		else if(event === 'upcoming') {
			this.setState((state)=>{
				objectAssign(state, {'content': this.state.upcoming})
			});
		}
		else {
			this.setState((state)=>{
				objectAssign(state, {'content': this.state.wantlist})
			});
		}
	}
	render() {
		return (
			<AppContent className="app-content">
				<Selectors className="selectors">
					<Selector className="selector selector-collection" onClick={this.changeList.bind(this, 'collection')}>
						<span className="selector-title">Collection</span>
					</Selector>
					<Selector className="selector selector-upcoming" onClick={this.changeList.bind(this, 'upcoming')}>
						<span className="selector-title">Upcoming</span>
					</Selector>
					<Selector className="selector selector-wantlist" onClick={this.changeList.bind(this, 'wantlist')}>
						<span className="selector-title">Wishlist</span>
					</Selector>
				</Selectors>
				<Content searchContent={this.searchContent} value={this.state.value} content={this.state.content}/>
			</AppContent>
		)
	}
}

export default App;