import React, { FC, useState } from 'react';

import Button from '../Button'

// import * as s from './index.styled';

export type Props = unknown;

const Tools: FC<Props> = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      {
        showSearch && <input type="text" />
      }
      <div>
        <Button onClick={() => setShowSearch(state => !state)}><i className="material-icons">search</i></Button>
        <Button><i className="material-icons">add</i></Button>
      </div>
    </div>
  );
};

export default Tools;
