import axios from 'axios';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Input/Input';
import { AuthContext } from '../../../context/auth';
import { DataContext } from '../../../context/data';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import React, { useContext, useState } from 'react';

export default function EntriesCreate() {
  let history = useHistory();
  let { id }: any = useParams();

  const { userId } = useContext(AuthContext);
  const { journalName } = useContext(DataContext);

  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();

  return (
    <section className="background">
      <Header type="left-small" />
      <div className="flex flex--column">
        <Link className="navigation" to={`/journal/${id}/posts`}>{`< ${journalName}`}</Link>
        <div className="flex flex--column">
          <Input
            type="text"
            name="postTitle"
            id="postTitle"
            onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
            placeholder="Title"
          />
          <textarea
            rows={10}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write"
          ></textarea>
          <Button
            text="Save note"
            type="primary"
            onClick={() => {
              axios
                .post(`https://fuerza.test/journals/entry/${id}`, {
                  title,
                  content,
                  userId,
                })
                .then(() => history.push(`/journal/${id}/posts`))
                .catch((error) => console.log(error));
            }}
          />
        </div>
      </div>
    </section>
  );
}
