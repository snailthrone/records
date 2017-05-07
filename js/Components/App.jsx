/*jshint esversion: 6 */
import React from 'react';
import objectAssign from 'object-assign';
import Axios from 'axios';
import Content from './Content.jsx';

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
			<div className="app-content">
				<div className="selectors">
					<div className="selector selector-collection" onClick={this.changeList.bind(this, 'collection')}>
						<span className="selector-title">Collection</span>
					</div>
					<div className="selector selector-upcoming" onClick={this.changeList.bind(this, 'upcoming')}>
						<span className="selector-title">Upcoming</span>
					</div>
					<div className="selector selector-wantlist" onClick={this.changeList.bind(this, 'wantlist')}>
						<span className="selector-title">Wishlist</span>
					</div>
				</div>
				<Content searchContent={this.searchContent} value={this.state.value} content={this.state.content}/>
			</div>
		)
	}
}

export default App;