import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Content from './Components/Content.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '2017-01-albums',
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
		let url = window.location.href;
		let _this = this;
		this.serverRequest = 
			Axios
				.get(url + "/data/data_collection.json")
				.then(function(result) {
					_this.setState({collection: result.data, content: result.data});
				});
			Axios
				.get(url + "/data/data_upcoming.json")
				.then(function(result) {
					_this.setState({upcoming: result.data});
				});
			Axios
				.get(url + "/data/data_wantlist.json")
				.then(function(result) {
					_this.setState({wantlist: result.data});
				});
	}
	searchContent(event) {
		this.setState({
			value: event.target.value.toLowerCase()
		});
	}
	changeList(event) {
		if (event === 'collection') {
			this.setState({content: this.state.collection});
		}
		else if(event === 'upcoming') {
			this.setState({content: this.state.upcoming});
		}
		else {
			this.setState({content: this.state.wantlist});
		}
	}
	render() {
		return (
			<div className="app_content">
				<div className="selectors">
					<div className="selector" onClick={this.changeList.bind(this, 'collection')}>
						<span className="selector_title">Collection</span>
					</div>
					<div className="selector" onClick={this.changeList.bind(this, 'upcoming')}>
						<span className="selector_title">Upcoming</span>
					</div>
					<div className="selector" onClick={this.changeList.bind(this, 'wantlist')}>
						<span className="selector_title">Wantlist</span>
					</div>
				</div>
				<Content searchContent={this.searchContent} value={this.state.value} content={this.state.content}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));