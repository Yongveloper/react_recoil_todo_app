import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atom';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const handleCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
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
  const handleRemove = () => {
    setToDos((oldToDos) => {
      const filterdToDos = oldToDos.filter((toDo) => toDo.id !== id);
      localStorage.setItem('toDos', JSON.stringify(filterdToDos));
      return filterdToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ''} onClick={handleCategory}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO + ''} onClick={handleCategory}>
          ToDo
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ''} onClick={handleCategory}>
          Done
        </button>
      )}
      <button onClick={handleRemove}>❌</button>
    </li>
  );
}

export default ToDo;
