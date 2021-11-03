import axios from 'axios';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

export default function SignUp() {
  let history = useHistory();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [error, setError] = useState<string>();

  return (
    <section
      className="background flex flex--column flex--justify--center"
      id="signUp"
    >
      <Header
        type="forms"
        title="Sign Up"
        link={{
          url: '/',
          copy: 'Already have an account',
        }}
      />
      <form className="flex flex--column">
        <Input
          type="text"
          placeholder="Define username"
          id="username"
          name="username"
          onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
          required={true}
        />
        <Input
          type="password"
          placeholder="Set your password"
          id="password"
          name="password"
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          required={true}
        />
        <Input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          placeholder="Email (optional)"
          required={false}
        />
        <Button
          text="Create account"
          type="primary"
          onClick={(e) => {
            e.preventDefault();

            username && password
              ? axios
                  .post('https://fuerza.test/auth/signup', {
                    username,
                    password,
                    email,
                  })
                  .then(() => history.push('/'))
                  .catch(() => setError('Sorry, an error ocurred'))
              : setError('Username or password cannot be empty');
          }}
        />
        {error && <Error warning={error} />}
      </form>
    </section>
  );
}
