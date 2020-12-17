import React, { FC, FormEvent, useState } from 'react';

// import * as s from './index.styled';

import Button from '../Button';

export type Props = unknown;

const Login: FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const user = { username, password }
    console.log(user);
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={submit}>
        <div>
          <label>Username <input onChange={({ target: { value }}) => setUsername(value)} type="text" value={username} /></label>
        </div>
        <div>
          <label>Password <input onChange={({ target: { value }}) => setPassword(value)} type="password" value={password} /></label>
        </div>
        <Button disabled={username === '' && password === ''} type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
