
import '../CSS/Task.css';
export interface TaskProp {
    id: number;
    title: string;
    description: string;
    finished?: boolean;
    date?: string;
}

const Task = ({ id, title, description }: TaskProp) => {
    return (
        <div className="task" onClick={() => console.log(id)}>
            <h3 className="task-id">{id}</h3>
            <h3 className="task-title">{title}</h3>
            <p className="task-description">{description}</p>
        </div>
    );
};

export default Task;