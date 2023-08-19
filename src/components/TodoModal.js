import React, { useState, useEffect } from 'react';

const defaultTodo = {
    title: "",
    dueDate: "",
    description: "",
    important: false,
    completed: false,
};

function TodoModal({ onAddTodo, initialData = null, isEditing = false }) {
    const [showModal, setShowModal] = useState(false);
    const [newTodo, setNewTodo] = useState(defaultTodo);

    useEffect(() => {
        if (initialData) {
            setNewTodo(initialData);
            setShowModal(true);
        } else {
            setNewTodo(defaultTodo);
        }
    }, [initialData]);

    const handleSubmit = () => {
        onAddTodo(newTodo);
        setNewTodo(defaultTodo);
        setShowModal(false);
    };

    return (
        <>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                {isEditing ? "Edit Todo" : "New Todo"}
            </button>

            {showModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{isEditing ? "Edit Todo" : "Add New Todo"}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Title"
                                    value={newTodo.title}
                                    onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                                />
                                <input
                                    type="date"
                                    className="form-control mb-2"
                                    value={newTodo.dueDate}
                                    onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
                                />
                                <textarea
                                    className="form-control mb-2"
                                    placeholder="Description"
                                    value={newTodo.description}
                                    onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                                ></textarea>
                                <div className="mb-2">
                                    <input
                                        type="checkbox"
                                        checked={newTodo.important}
                                        onChange={(e) => setNewTodo({ ...newTodo, important: e.target.checked })}
                                    /> Important
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="checkbox"
                                        checked={newTodo.completed}
                                        onChange={(e) => setNewTodo({ ...newTodo, completed: e.target.checked })}
                                    /> Completed
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                <button type="button" className="btn btn-addTodo" onClick={handleSubmit}>
                                    {isEditing ? "Update Todo" : "Add Todo"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default TodoModal;
