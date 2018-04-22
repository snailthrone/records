import React from 'react';
import styled from 'styled-components';

const Albums = styled.div`
  font-size: 14px;
  line-height: 1.75;
  margin: auto;
  max-width: 600px;
  padding-bottom: 100px;
  width: 95%;
  @media screen and (min-width: 600px) {
    font-size: 18px;
    width: 100%;
  }
`;

const Heading = styled.h3`
  font-weight: 700;
  margin: auto auto 10px auto;
`;

const Album = styled.p`
	margin: auto auto 15px auto;
	text-decoration: ${props => props.bought ? 'line-through' : 'none'};
`;

const AlbumArtist = styled.span``;
const AlbumTitle = styled.span``;
const AlbumDate = styled.span``;

export default props => (
	<Albums>
	<Heading>Artist – Album (date)</Heading>
	{
		props.data.map((data, i) => {
			if (data.artist.toLowerCase().match(props.value) || data.album.toLowerCase().match(props.value) || data.date.match(props.value)) {
				return (
					<Album bought={data.bought} key={i}>{i+1}.
						<AlbumArtist className="artist"> {data.artist}</AlbumArtist> –
						<AlbumTitle className="album"> {data.album} </AlbumTitle>
						{(data.date && data.date != 'null') && <AlbumDate className="date">({data.date})</AlbumDate>}
					</Album>
				);
			}
		})
	}
	</Albums>
);