import { loginUser, setUserTodos } from '../services';
import { createSlice } from '@reduxjs/toolkit';

const UserInitialState = {
  username: '',
  todos: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: UserInitialState },
  reducers: {
    login: (state, action) => {
      console.log({ action });
      state.value = loginUser(action.payload.username);
    },
    logout: (state) => {
      state.value = UserInitialState;
      localStorage.setItem('last-login', null);
    },
    toggleTodo: (state, action) => {
      state.value.todos.map((todo) => {
        todo.done = todo.id === action.payload.id ? !todo.done : todo.done;

        return todo;
      });

      setUserTodos(state.value.username, state.value.todos);
    },
    addTodo: (state, action) => {
      state.value.todos = [action.payload, ...state.value.todos];
      setUserTodos(state.value.username, state.value.todos);
    },
    deleteTodo: (state, action) => {
      const todos = state.value.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.value.todos = todos;
      setUserTodos(state.value.username, todos);
    },
    updateTodo: (state, action) => {
      state.value.todos.map((todo) => {
        todo.text =
          todo.id === action.payload.id ? action.payload.text : todo.text;
        return todo;
      });
      setUserTodos(state.value.username, state.value.todos);
    },
    //
  },
});

export const { login, logout, toggleTodo, addTodo, deleteTodo, updateTodo } =
  userSlice.actions;

export default userSlice.reducer;
