
import Task, {TaskProp} from './Task.tsx';
import '../CSS/TaskList.css';
const TaskList = ({ items }) => {
    if (!items || items.length === 0) {
        return (
            <p className="no-tasks">No tasks available.</p>
        );
    }
    return (
        <div className="task-list">
            {items.map((item: TaskProp) => {
                return (
                    <Task
                        id={item.id}
                        title={item.title}
                        description={item.description}
                    />
                )
            })}
        </div>
    );
};

export default TaskList;