import './header.scss';
import React, { Fragment } from 'react';
import nocturnalLogo from '../../assets/images/nocturnal-logo.png';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

type HeaderProps = {
  type: 'left' | 'left-small' | 'withButton' | 'forms';
  title?: string;
  link?: {
    url: any;
    copy: string;
  };
};

const image = () => <img src={nocturnalLogo} alt="Nocturnal header" />;

const checkType = (type: string, title: string | undefined, link: any) => {
  switch (type) {
    case 'left':
      return <div className="header header--left">{image()}</div>;

    case 'left-small':
      return (
        <div className="header header--left header--left--small">{image()}</div>
      );

    case 'withButton':
      return (
        <div className="header header--left header--left--small flex flex--justify--space-between">
          {image()}
          <Link to={link?.url}>
            <Button text={link?.copy} type="secondary" />
          </Link>
        </div>
      );

    case 'forms':
      return (
        <div className="header header--left header--forms">
          {image()}
          <div className="flex flex--justify--space-between flex--align--baseline">
            <p className="header--title">{title}</p>
            <Link className="header--link" to={link?.url}>
              <strong>{link?.copy}</strong>
            </Link>
          </div>
        </div>
      );

    default:
      break;
  }
};

export default function Header({ type, title, link }: HeaderProps) {
  return <Fragment>{checkType(type, title, link)}</Fragment>;
}
