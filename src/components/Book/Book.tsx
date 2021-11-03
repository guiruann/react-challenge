import './books.scss';
import React from 'react';

type BookProps = {
  title: string | undefined;
  type: 'big' | 'small';
};

// const randomColors = (type: any) => {
//   let colors = ['#B8E5E3', '#5091D6', '#3B4E8D'];

//   if (type === 'small') {
//     return colors[Math.round(Math.random() * colors.length - 1)];
//   }
// };

export default function Book({ title, type }: BookProps) {
  return (
    <div
      className={`flex book book-${type}`}
      // style={{ backgroundColor: randomColors(type) }}
    >
      <div
        className="book-mark"
        // style={{ backgroundColor: randomColors(type) }}
      ></div>
      <h2 className="book-title">{title}</h2>
    </div>
  );
}
