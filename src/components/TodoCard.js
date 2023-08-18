import React from 'react';

function TodoCard({ todo, onEdit, onDelete, onFavorite, onComplete }) {
    return (
        <div className="todo-card bg-light rounded p-3 mb-3 shadow">
            <div className="d-flex justify-content-between">
                <h3>{todo.title}</h3>
                <button 
                    className={`btn btn-sm ${todo.important ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={() => onFavorite(todo)}
                >
                    ★
                </button>
            </div>
            <p>{todo.description}</p>
            <p>Date: {todo.dueDate}</p>
            <p><strong>{todo.completed ? "Completed" : "Pending"}</strong></p>
            
            <div className="d-flex justify-content-between">
                <button className="btn btn-success btn-sm" onClick={() => onComplete(todo)}>
                    {todo.completed ? "Undo Complete" : "Complete"}
                </button>
                <button className="btn btn-warning btn-sm" onClick={() => onEdit(todo)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo)}>Delete</button>
            </div>
        </div>
    );
}

export default TodoCard;
