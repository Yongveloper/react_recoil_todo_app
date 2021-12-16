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

interface IFrom {
  email: string;
  firstName: string;
  last_Name: string;
  userName: string;
  password: string;
  password1: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFrom>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('email', {
            required: 'Email is Required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver.com emails allowed',
            },
          })}
          type="email"
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', { required: 'Write here' })}
          type="text"
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register('last_Name', { required: 'Write here' })}
          type="text"
          placeholder="Last Name"
        />
        <span>{errors?.last_Name?.message}</span>

        <input
          {...register('userName', { required: 'Write here', minLength: 10 })}
          type="text"
          placeholder="Username"
        />
        <span>{errors?.userName?.message}</span>

        <input
          {...register('password', { required: 'Write here', minLength: 5 })}
          type="password"
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register('password1', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Your password is too short',
            },
          })}
          type="password"
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
