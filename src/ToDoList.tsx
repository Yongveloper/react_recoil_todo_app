import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// function ToDoList() {
//   const [toDo, setToDo] = useState('');
//   const [toDoError, setToDoError] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError('');
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError('To do should be longer');
//     }
//     console.log('submit');
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write a to do"
//         />
//         <button>Add</button>
//         {toDoError !== '' ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register('email')} type="email" placeholder="Email" />
        <input
          {...register('firstName')}
          type="text"
          placeholder="First Name"
        />
        <input {...register('last_Name')} type="text" placeholder="Last Name" />
        <input {...register('userName')} type="text" placeholder="Username" />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
        />
        <input
          {...register('password1')}
          type="password"
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
