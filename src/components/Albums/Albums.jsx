import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.ul`
  list-style: none;
  margin: 10px auto auto auto;
  max-width: 600px;
  padding: 0 0 100px 0;
  width: 90%;
  @media screen and (min-width: 600px) {
    width: 100%;
  }
`

const Heading = styled.h3`
  font-family: 'Questrial', Verdana, sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin: auto auto 10px auto;
`

const Album = styled.li`
  font-family: 'Questrial', Verdana, sans-serif;
  font-size: 12px;
  line-height: 1.35em;
  margin: auto auto .4em auto;
  text-decoration: ${({ bought }) => (bought ? 'line-through' : 'none')};
  @media screen and (min-width: 600px) {
    font-size: 14px;
  }
`

const AlbumArtist = styled.span``
const AlbumTitle = styled.span``
const AlbumDate = styled.span``

const Albums = ({ data, value }) => (
  <Container>
    <Heading>
      Artist – Album (date)
    </Heading>
    {
      data.map(({
        artist, album, bought, date,
      }, i) => {
        if (artist.toLowerCase().match(value.toLowerCase())
            || album.toLowerCase().match(value.toLowerCase())
            || date.match(value.toLowerCase())
        ) {
          return (
            <Album bought={bought} key={`album-'${(i + 1)}`}>
              <AlbumArtist className="artist">
                {' '}
                {artist}
              </AlbumArtist>
              {' '}
              –
              <AlbumTitle className="album">
                {' '}
                {album}
                {' '}
              </AlbumTitle>
              {(date && date !== 'null') && (
              <AlbumDate className="date">
                (
                {date}
                )
              </AlbumDate>
              )}
            </Album>
          )
        }
        return false
      })
    }
  </Container>
)

Albums.propTypes = {
  data: PropTypes.arrayOf(() => {}).isRequired,
  value: PropTypes.string,
}

Albums.defaultProps = {
  value: '',
}

export default Albums
