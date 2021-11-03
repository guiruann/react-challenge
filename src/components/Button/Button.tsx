import './button.scss';
import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  text: String;
  type: 'primary' | 'secondary';
  onClick?: MouseEventHandler;
};

const Button = ({ text, type, onClick }: ButtonProps) => (
  <button className={'button button--' + type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
