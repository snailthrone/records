import React from 'react';
import Axios from 'axios';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Content'
		}
	}
	render() {
		return (
			<div className="collection_container">
				<div className="header_container">
					<h1 className="collection_header">Records</h1>
				</div>
				<div className="album_wrapper">
					<p className="description_text">Artist - Album</p>
					{this.props.content.map((data, i) => {
						if (data.artist.toLowerCase().match(this.props.value) || data.album.toLowerCase().match(this.props.value)) {
							if (data.date) {
								if (data.bought == true) {
									return(
										<p className="album_element album_element_bought" key={i}>{i+1}. <span className="artist">{data.artist}</span> - <span className="album">{data.album}</span> <span className="date">({data.date})</span></p>
									);	
								}
								else {
									return(
										<p className="album_element" key={i}>{i+1}. <span className="artist">{data.artist}</span> - <span className="album">{data.album}</span> <span className="date">({data.date})</span></p>
									);	
								}
							}
							else {
								return(
									<p className="album_element" key={i}>{i+1}. <span className="artist">{data.artist}</span> - <span className="album">{data.album}</span></p>
								);	
							}
						}
					})}
				</div>
				<div className="input_container">
					<input type="text" name="search_field" className="search_field" placeholder="Search" value={this.props.value} onChange={this.props.searchContent}/>
				</div>
			</div>
		)
	}
}

export default Content;