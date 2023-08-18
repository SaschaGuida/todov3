import React from 'react';

function ProgressBar({ todos }) {
    return (
        <div className="mb-3">
            Tasks progress: {todos.length} task(s)
        </div>
    );
}

export default ProgressBar;
