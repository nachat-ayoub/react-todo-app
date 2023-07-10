import { addTodo, login } from '../redux/user';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getUser } from '../services';
import Todo from './Todo';
import Auth from './Auth';

import './Styles/Main.css';

const Main = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    const userData = getUser(user.username);
    if (userData) {
      dispatch(login(userData));
    }
  }, []);

  return (
    <main className='main_container'>
      <Auth />

      {user?.username && (
        <div className='container'>
          <form
            className='todoInput'
            onSubmit={(e) => {
              e.preventDefault();

              if (todoText.trim() !== '') {
                const todoVal = {
                  id:
                    user?.todos?.length === 0
                      ? 1
                      : user.todos[user.todos.length - 1].id + 1,
                  text: todoText.trim(),
                  done: false,
                };
                dispatch(addTodo(todoVal));
                setTodoText('');
              }
            }}
          >
            <input
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
              type='text'
              placeholder='Add a todo...'
            />
            <button>Add Todo</button>
          </form>
          {/*  */}
          <div className='todosContainer'>
            {user.todos?.length > 0 &&
              user.todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
