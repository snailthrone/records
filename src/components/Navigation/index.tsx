import React, { FC } from 'react';

// import * as s from './index.styled';

export type Props = unknown;

const Navigation: FC<Props> = () => {
  return (
    <nav>
      <ul>
        <li>Collection</li>
        <li>Wishlist</li>
      </ul>
    </nav>
  );
};

export default Navigation;
