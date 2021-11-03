import Article from '../../../components/Article/Article';
import Header from '../../../components/Header/Header';
import { DataContext } from '../../../context/data';
import { Link, useParams } from 'react-router-dom';
import React, { useContext } from 'react';

export default function EntriesView() {
  let { id, entryId }: any = useParams();

  const { journalName, entries } = useContext(DataContext);

  return (
    <section className="background">
      <Header type="left-small" />
      <div className="flex flex--column">
        <Link
          className="navigation"
          to={`/journal/${id}/posts`}
        >{`< ${journalName}`}</Link>
        <div className="flex flex--column">
          <Article
            title={(entries[entryId] as any).title}
            content={(entries[entryId] as any).content}
            type="fullwidth"
          />
        </div>
      </div>
    </section>
  );
}
