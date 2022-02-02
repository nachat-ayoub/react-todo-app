import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../redux/user";

import "./Styles/Todo.css";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);
  const [editedValue, setEditedValue] = useState("");

  const editInputRef = useRef();

  useEffect(() => {
    setEditedValue(todo.text);
    if (showEdit) {
      editInputRef.current.focus();
    }
  }, [showEdit]);

  return (
    <div className="">
      {!showEdit ? (
        <div className="todo">
          <div
            className={`${todo.text.length >= 53 && "bigText"}  todoText`}
            style={{ textDecoration: todo.done && "line-through" }}
          >
            {todo.text}
          </div>
          <div className="actions">
            <button
              className="CompletBtn"
              style={{ backgroundColor: todo.done ? "#32a852" : "#d43333" }}
              onClick={() => {
                dispatch(toggleTodo({ id: todo.id }));
              }}
            >
              {todo.done ? (
                <i className="las la-check"></i>
              ) : (
                <i className="las la-times"></i>
              )}
            </button>
            <button
              className="btn"
              onClick={() => {
                setShowEdit(true);
              }}
            >
              <i className="las la-edit"></i>
            </button>
            <button
              className="btn"
              onClick={() => {
                dispatch(deleteTodo({ id: todo.id }));
              }}
            >
              <i className="las la-trash-alt"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="editContainer">
          <h3>Edit Todo :</h3>
          <div className="editArea">
            <input
              ref={editInputRef}
              onChange={(e) => setEditedValue(e.target.value)}
              value={editedValue}
              type="text"
            />
            <button
              onClick={() => {
                dispatch(
                  updateTodo({
                    text: editedValue,
                    id: todo.id,
                    done: todo.done,
                  })
                );
                setShowEdit(false);
              }}
            >
              <i className="las la-save"></i>
            </button>
            <button onClick={() => setShowEdit(false)}>
              <i className="las la-window-close"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
