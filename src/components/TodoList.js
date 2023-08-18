import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProgressBar from './ProgressBar';
import TodoCard from './TodoCard';
import TodoModal from './TodoModal';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [editingTodo, setEditingTodo] = useState(null);  // Per tenere traccia del todo da modificare

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const handleDeleteTodo = (todoToDelete) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoToDelete.id);
        setTodos(updatedTodos);
    };

    const handleFavoriteTodo = (favoritedTodo) => {
        const updatedTodos = todos.map(todo => 
            todo.id === favoritedTodo.id ? { ...todo, important: !todo.important } : todo
        );
        setTodos(updatedTodos);
    };

    const handleCompleteTodo = (completedTodo) => {
        const updatedTodos = todos.map(todo => 
            todo.id === completedTodo.id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleEditTodo = (todoToEdit) => {
        setEditingTodo(todoToEdit);
    };

    const handleUpdateTodo = (updatedTodo) => {
        const updatedTodos = todos.map(todo => 
            todo.id === updatedTodo.id ? updatedTodo : todo
        );
        setTodos(updatedTodos);
        setEditingTodo(null);  // Reset dopo l'aggiornamento
    };
    

    return (
        <div className="todo-list-container p-3">
            <div className="header-section mb-3 d-flex justify-content-between align-items-center">
                <SearchBar />
                <ProgressBar todos={todos} />
                <TodoModal onAddTodo={handleAddTodo} />
            </div>

            <div className="todos-grid d-flex flex-wrap w-100">
                {todos.map((todo) => (
                    <TodoCard 
                        key={todo.id} 
                        todo={todo}
                        onDelete={handleDeleteTodo}
                        onFavorite={handleFavoriteTodo}
                        onEdit={handleEditTodo}
                        onComplete={handleCompleteTodo}
                    />
                ))}
            </div>
            
            {editingTodo && (
                <TodoModal 
                    initialData={editingTodo} 
                    onAddTodo={handleUpdateTodo}
                    isEditing={true} 
                />
            )}
        </div>
    );
}

export default TodoList;
