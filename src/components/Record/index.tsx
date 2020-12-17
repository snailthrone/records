import React, { FC } from 'react';

export type Props = {
  title: string;
  performer: string;
  releaseDate: number;
  catalogId?: string;
};

const Record: FC<Props> = props => {
  const { title, performer, releaseDate, catalogId } = props;
  return (
    <div>
      <h3>{title}</h3>
      <h4>{performer}</h4>
      <div>
        <span>{releaseDate}</span> { catalogId && <span>{catalogId}</span> }
      </div>
    </div>
  )
}

export default Record;
