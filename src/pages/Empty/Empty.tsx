import './empty.scss';
import meditation from '../../assets/images/meditation.png';
import { Link, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import React from 'react';

type EmptyProps = {
  title?: string;
  path: string;
  cta: string;
};

export default function Empty({ title, path, cta }: EmptyProps) {
  const { url } = useRouteMatch();

  return (
    <section className="background empty flex flex--column">
      <Header type="left-small" />
      <div className="empty-container">
        {title && <h3>{title}</h3>}
        <img src={meditation} alt="" />
        <Link to={`${url}${path}`}>
          <strong>{cta}</strong>
        </Link>
      </div>
    </section>
  );
}
