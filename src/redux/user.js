import { createSlice } from "@reduxjs/toolkit";

const UserInitialState = {
  username: "",
  email: "",
  todos: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState: { value: UserInitialState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("user", JSON.stringify(state.value));
    },
    logout: (state) => {
      state.value = UserInitialState;
      localStorage.setItem("user", JSON.stringify(state.value));
    },
    toggleTodo: (state, action) => {
      state.value.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.done = !todo.done;
        }
      });
      localStorage.setItem("user", JSON.stringify(state.value));
    },
    addTodo: (state, action) => {
      state.value.todos.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.value));
    },
    deleteTodo: (state, action) => {
      state.value.todos = state.value.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      localStorage.setItem("user", JSON.stringify(state.value));
    },
    updateTodo: (state, action) => {
      state.value.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
      localStorage.setItem("user", JSON.stringify(state.value));
    },
    //
  },
});

export const { login, logout, toggleTodo, addTodo, deleteTodo, updateTodo } =
  userSlice.actions;

export default userSlice.reducer;
