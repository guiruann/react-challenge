import './input.scss';
import React, { ChangeEventHandler } from 'react';

type InputProps = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  onChange: ChangeEventHandler;
  required?: boolean;
};

export default function Input({
  type,
  name,
  id,
  placeholder,
  onChange,
  required,
}: InputProps) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
}
