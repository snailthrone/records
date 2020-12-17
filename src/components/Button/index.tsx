import React, { FC, ButtonHTMLAttributes } from 'react';

// import * as s from './index.styled';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
};

const Button: FC<Props> = ({ children, disabled, type = 'button' }) => (
  <button disabled={disabled} type={type}>{children}</button>
);

export default Button;
