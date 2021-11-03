import './create.scss';
import axios from 'axios';
import Book from '../../../components/Book/Book';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Input/Input';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../context/auth';
import React, { useContext, useState } from 'react';

export default function JournalCreate() {
  let history = useHistory();

  const { userId } = useContext(AuthContext);

  const [title, setTitle] = useState<string>();

  return (
    <section className="background create flex flex--column">
      <Header type="left-small" />
      <div className="create--container flex flex--column flex--justify--space-between">
        <Book title={title} type="big" />
        <Input
          type="text"
          name="journalTitle"
          id="journalTitle"
          placeholder="Journal title"
          required={false}
          onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
        />
        <Button
          text="Save Journal"
          type="primary"
          onClick={() => {
            axios
              .post('https://fuerza.test/journals/', {
                title,
                userId,
              })
              .then(() => history.push('/journal'))
              .catch((error) => console.log(error));
          }}
        />
      </div>
    </section>
  );
}
