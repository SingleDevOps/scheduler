import React, {useState} from 'react';
import '../CSS/Task.css';
export interface TaskProp {
    id: number;
    title: string;
    description: string;
    finished?: boolean;
    date?: string;
}

const Task = ({ id, title, description }: TaskProp) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);
    const mouseLeave = () => setIsExpanded(false);

    return (
        <div 
        className={`task ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleExpand}
        onMouseLeave={mouseLeave}
        >
            <h3 className="task-id">{id}</h3>
            <h3 className="task-title">{title}</h3>
            <p className="task-description">{description}</p>
        </div>
    );
};

export default Task;