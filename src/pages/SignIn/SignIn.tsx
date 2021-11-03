import './signin.scss';
import axios from 'axios';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { AuthContext } from '../../context/auth';
import { useHistory } from 'react-router-dom';
import React, { useContext, useState } from 'react';

export default function SignIn() {
  let history = useHistory();

  const { setIsAuthenticated, setUserId } = useContext(AuthContext);

  const [username, setUsername] = useState<String>();
  const [password, setPassword] = useState<String>();
  const [error, setError] = useState<boolean>();

  return (
    <section
      className="background flex flex--column flex--justify--center"
      id="signIn"
    >
      <Header
        type="forms"
        title="Sign In"
        link={{
          url: '/signup',
          copy: 'Sign Up',
        }}
      />
      <form className="flex flex--column">
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Your username"
          onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
          required={true}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          required={true}
        />
        <a className="signIn--link" href="#forgot">
          Forgot password?
        </a>
        <Button
          text="Log In"
          type="primary"
          onClick={(e) => {
            e.preventDefault();

            axios
              .post('https://fuerza.test/auth/login', {
                username,
                password,
              })
              .then((res) => {
                setIsAuthenticated(true);
                setUserId(res.data.user.id);
                history.push('/journal');
              })
              .catch(() => setError(true));
          }}
        />
        {error && <Error warning="Username or password incorrect" />}
      </form>
    </section>
  );
}
