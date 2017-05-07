/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './Components/App.jsx';

let app = document.getElementById('app');

=======
import Axios from 'axios';
import Content from './Components/Content.jsx';

let app = document.getElementById('app');

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
				.then((result) => {
					_this.setState({collection: result.data, content: result.data});
				});
			Axios
				.get(url + "/data/data_upcoming.json")
				.then((result) => {
					_this.setState({upcoming: result.data});
				});
			Axios
				.get(url + "/data/data_wantlist.json")
				.then((result) => {
					_this.setState({wantlist: result.data});
				});
	}
	componentDidUpdate() {
  		ReactDOM.findDOMNode(this).scrollTop = 0;
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
		console.log('rendering...')
		return (
			<div className="app_content">
				<div className="selectors">
					<div className="selector selector_collection" onClick={this.changeList.bind(this, 'collection')}>
						<span className="selector_title">Collection</span>
					</div>
					<div className="selector selector_upcoming" onClick={this.changeList.bind(this, 'upcoming')}>
						<span className="selector_title">Upcoming</span>
					</div>
					<div className="selector selector_wantlist" onClick={this.changeList.bind(this, 'wantlist')}>
						<span className="selector_title">Wishlist</span>
					</div>
				</div>
				<Content searchContent={this.searchContent} value={this.state.value} content={this.state.content}/>
			</div>
		)
	}
}

>>>>>>> refs/remotes/origin/master
ReactDOM.render(<App />, app);