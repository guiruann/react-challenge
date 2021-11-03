import '../entries.scss';
import axios from 'axios';
import Article from '../../../components/Article/Article';
import Empty from '../../Empty/Empty';
import Header from '../../../components/Header/Header';
import { DataContext } from '../../../context/data';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

export default function EntriesList() {
  let { id }: any = useParams();
  let { url } = useRouteMatch();

  const { entries, setEntries, journalName } = useContext(DataContext);

  useEffect(() => {
    axios
      .get(`https://fuerza.test/journals/entries/${id}`)
      .then((response) => setEntries(response.data.entries));
  }, [id, setEntries]);

  if (entries.length > 0) {
    return (
      <section className="background">
        <Header
          type="withButton"
          link={{
            url: `${url}/create`,
            copy: '+ Add note',
          }}
        />
        <div className="flex flex--column">
          <Link
            className="navigation"
            to={`/journal`}
          >{`< ${journalName}`}</Link>
          <div className="flex flex--row flex--justify--space-between flex--wrap">
            {entries.map((entry: any, i: number) => (
              <Link
                className="entries--create--entry"
                key={i}
                to={`${url}/view/${i}`}
              >
                <Article key={i} title={entry.title} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return <Empty path="/create" cta="Create a note" />;
  }
}
