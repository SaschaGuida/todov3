import React from 'react';
import Menu from './Menu';
import TodoList from './TodoList';

function App() {
    return (
        <div className="d-flex">
            <Menu />
            <TodoList />
        </div>
    );
}

export default App;
