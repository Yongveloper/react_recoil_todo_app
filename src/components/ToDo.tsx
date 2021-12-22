import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atom';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as Categories };
      const newToDos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem('toDos', JSON.stringify(newToDos));
      return newToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ''} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO + ''} onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ''} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
