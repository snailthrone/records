import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
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
`

const Heading = styled.h3`
  font-weight: 700;
  margin: auto auto 10px auto;
`

const Album = styled.p`
  margin: auto auto 15px auto;
  text-decoration: ${({ bought }) => (bought ? 'line-through' : 'none')};
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
              {i + 1}
              .
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
