import React from 'react';
import Album from './Album.jsx';

const Content = (props) => {
	return (
		<div className="collection-container">
			<div className="header-container">
				<h1 className="collection-header">Records</h1>
			</div>
			<div className="album-wrapper">
				<p className="description-text">Artist - Album</p>
				<Album content={props.content} value={props.value} />
			</div>
			<div className="input-container">
				<input type="text" name="search-field" className="search-field" placeholder="Search" value={props.value} onChange={props.searchContent}/>
			</div>
		</div>
	)
};

export default Content;