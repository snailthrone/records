import React, { FC, useState } from 'react';

export type Props = unknown;

const NewRecord: FC<Props> = () => {
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('');
  const [catalogId, setCatalogId] = useState('');

  const submit = async event => {
    event.preventDefault();

    const newAlbum = { album, artist, year, catalogId };

    console.log(newAlbum)

    setAlbum('');
    setArtist('');
    setYear('');
    setCatalogId('');
  }

  return (
    <div>
      <h3>Add new record</h3>
      <form onSubmit={submit}>
        <div>
          <label>
            Album:
            {' '}
            <input onChange={({ target: { value }}) => setAlbum(value)} type="text" value={album} />
          </label>
        </div>
        <div>
          <label>
            Artist:
            {' '}
            <input onChange={({ target: { value }}) => setArtist(value)} type="text" value={artist} />
          </label>
        </div>
        <div>
          <label>
            Year:
            {' '}
            <input onChange={({ target: { value }}) => setYear(value)} type="text" value={year} />
          </label>
        </div>
        <div>
          <label>
            Catalog id:
            {' '}
            <input onChange={({ target: { value }}) => setCatalogId(value)} type="text" value={catalogId} />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
};

export default NewRecord;
