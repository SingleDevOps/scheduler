import React from 'react';

export interface TaskProp {
    id: number;
    title: string;
    description: string;
}

const Task = ({ id, title, description }: TaskProp) => {
    return (
        <div className="task">
            <span className="task-id">{id}</span>
            <h3 className="task-title">{title}</h3>
            <p className="task-description">{description}</p>
        </div>
    );
};

export default Task;