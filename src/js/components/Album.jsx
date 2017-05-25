import React from 'react';
import styled from 'styled-components';

const AlbumEl = styled.p`
	margin: auto auto 15px auto;
	&.album-element-bought {
		text-decoration: line-through;
	}
`;

const Album = props => {
	return (
		<div className="album-sub-wrapper">
			{props.content.map((data, i) => {
				if (data.artist.toLowerCase().match(props.value) || data.album.toLowerCase().match(props.value)) {
					if (data.date) {
						if (data.bought === true) {
							return(
								<AlbumEl className="album-element album-element-bought" key={i}>{i+1}. <span className="artist">{data.artist}</span> - <span className="album">{data.album}</span> <span className="date">({data.date})</span></AlbumEl>
							);	
						}
						else {
							return(
								<AlbumEl className="album-element" key={i}>{i+1}. <span className="artist">{data.artist}</span> - <span className="album">{data.album}</span> <span className="date">({data.date})</span></AlbumEl>
							);	
						}
					}
					else {
						return(
							<AlbumEl className="album-element" key={i}>{i+1}. <span className="artist">{data.artist}</span> - <span className="album">{data.album}</span></AlbumEl>
						);	
					}
				}
			})}
		</div>
	)
}

export default Album;