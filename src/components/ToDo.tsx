import React from 'react';
import { IToDo } from '../atom';

function ToDo({ text, category, id }: IToDo) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
  };
  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== 'TO_DO' && (
        <button name="TO_DO" onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== 'DONE' && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
