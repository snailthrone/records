import React from 'react';

const Album = (props) => {
	return (
		<div className="album-sub-wrapper">
			{props.content.map((data, i) => {
				if (data.artist.toLowerCase().match(props.value) || data.album.toLowerCase().match(props.value)) {
					if (data.date) {
						if (data.bought === true) {
							return(
								<p className="album-element album-element-bought" key={i}>{i+1}. <span className="artist">{data.artist}</span> - <span className="album">{data.album}</span> <span className="date">({data.date})</span></p>
							);	
						}
						else {
							return(
								<p className="album-element" key={i}>{i+1}. <span className="artist">{data.artist}</span> - <span className="album">{data.album}</span> <span className="date">({data.date})</span></p>
							);	
						}
					}
					else {
						return(
							<p className="album-element" key={i}>{i+1}. <span className="artist">{data.artist}</span> - <span className="album">{data.album}</span></p>
						);	
					}
				}
			})}
		</div>
	)
}

export default Album;