import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Login from "./Login";
import Todo from "./Todo";

import "./Styles/Main.css";
import "./Styles/Login.css";
import { addTodo, login, logout } from "../redux/user";

const Main = () => {
  // const fakeTodos = [
  //   {
  //     id: 1,
  //     text: "First Todo Here let's gooo!",
  //     done: true,
  //   },
  //   {
  //     id: 2,
  //     text: "2 Todo Walk the dog in the morning",
  //     done: false,
  //   },
  //   {
  //     id: 3,
  //     text: "3 Todo go shoping in the mole",
  //     done: false,
  //   },
  //   {
  //     id: 4,
  //     text: "2 Todo Play soccer in the park",
  //     done: false,
  //   },
  // ];
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      dispatch(login(userData));
    }
  }, []);

  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");

  return (
    <main>
      {!user.email ? (
        <Login />
      ) : (
        <div className="container">
          <div className="Logout_container">
            <h2>Username : {user.username} </h2>
            <h2>Email : {user.email} </h2>
            <button
              onClick={() => {
                dispatch(logout());
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    username: null,
                    email: null,
                    todos: user.todos,
                  })
                );
              }}
              className="LogoutBtn"
            >
              logout
            </button>
          </div>
          <div className="todoInput">
            <input
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
              type="text"
              placeholder="Add a todo..."
            />
            <button
              onClick={() => {
                if (todoText.trim() !== "") {
                  const todoVal = {
                    id:
                      user.todos.length === 0
                        ? 1
                        : user.todos[user.todos.length - 1].id + 1,
                    text: todoText.trim(),
                    done: false,
                  };
                  dispatch(addTodo(todoVal));
                  setTodoText("");
                }
              }}
            >
              Add Todo
            </button>
          </div>
          <div className="todosContainer">
            {user.todos.length > 0 &&
              user.todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
