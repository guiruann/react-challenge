import './list.scss';
import axios from 'axios';
import Book from '../../../components/Book/Book';
import Empty from '../../Empty/Empty';
import Header from '../../../components/Header/Header';
import { Link, useRouteMatch } from 'react-router-dom';
import { AuthContext } from '../../../context/auth';
import { DataContext } from '../../../context/data';
import React, { useContext, useEffect } from 'react';

export default function JournalList() {
  const { url } = useRouteMatch();

  const { userId } = useContext(AuthContext);
  const { journals, setJournals, setJournalName } = useContext(DataContext);

  useEffect(() => {
    axios.get(`https://fuerza.test/journals/${userId}`).then((response) => {
      setJournals(response.data.journals);
    });
  }, [setJournals, userId]);

  if (journals.length > 0) {
    return (
      <section className="background journalList">
        <div className="journalList-header">
          <Header
            type="withButton"
            link={{
              url: `${url}/create`,
              copy: '+ Add journal',
            }}
          />
        </div>
        <div className="journalList-container">
          {journals.map((l: any, i: number) => (
            <Link
              to={`${url}/${l.id}/posts`}
              onClick={() => setJournalName(l.title)}
              key={i}
            >
              <Book title={l.title} type="small" />
            </Link>
          ))}
        </div>
      </section>
    );
  } else {
    return <Empty path="/create" cta="Create a journal" />;
  }
}
