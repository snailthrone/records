import React from 'react';
import Album from './Album.jsx';
import styled from 'styled-components';

const CollectionContainer = styled.div`
  margin: auto;
  padding-bottom: 20px;
  position: relative;
  width: 100%;
  z-index: 50;
`;

const HeaderContainer = styled.div`
  background: #222;
  color: #fff;
  font-size: 30px;
  margin: auto;
  padding: 20px 0;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
`;

const CollectionHeader = styled.h1`
	background: #222;
	color: #fff;
	font-size: 30px;
	margin: auto;
	padding: 20px 0;
	position: fixed;
	text-align: center;
	top: 0;
	width: 100%;
`;

const AlbumWrapper = styled.div`
  font-size: 14px;
  line-height: 1.75;
  margin: auto;
  max-width: 600px;
  padding-bottom: 100px;
  padding: 100px 0;
  width: 95%;
  @media screen and (min-width: 600px) {
    font-size: 18px;
    width: 100%;
  }
`;

const DescriptionText = styled.p`
  font-weight: 700;
  margin: auto auto 10px auto;
`;

const InputContainer = styled.div`
  background: #fff;
  bottom: 55px;
  margin-left: 6px;
  margin: auto;
  max-width: 600px;
  padding: 10px 0;
  position: fixed;
  width: 95%;
  @media screen and (min-width: 600px) {
    max-width: 99%;
    width: 100%;
  }
`;

const SearchField = styled.input`
  margin: auto;
  padding: 10px 0;
  text-indent: 5px;
  width: 100%;
`;

const Content = props => {
	return (
		<CollectionContainer className="collection-container">
			<HeaderContainer className="header-container">
				<CollectionHeader className="collection-header">Records</CollectionHeader>
			</HeaderContainer>
			<AlbumWrapper className="album-wrapper">
				<DescriptionText className="description-text">Artist - Album</DescriptionText>
				<Album content={props.content} value={props.value} />
			</AlbumWrapper>
			<InputContainer className="input-container">
				<SearchField type="text" name="search-field" className="search-field" placeholder="Search" value={props.value} onChange={props.searchContent}/>
			</InputContainer>
		</CollectionContainer>
	)
};

export default Content;