import './error.scss';
import React from 'react';

type ErrorProps = {
  warning: string;
};

const Error = ({ warning }: ErrorProps) => (
  <div className="error">
    <p>{warning}</p>
  </div>
);

export default Error;
