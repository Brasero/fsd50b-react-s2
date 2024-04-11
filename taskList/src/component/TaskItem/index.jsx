// path: taskList/src/component/TaskItem/index.jsx
import './taskItem.scss';
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, deleteTodo, toggleTaskComplete, updateTodo} from "../../store/Slice/taskSlice.js";
import {selectApiStatus} from "../../store/selector/index.js";

const isDone = (done) => done ? 'item done' : 'item'

const TaskItem = ({task}) => {

    const dispatch = useDispatch()
    const apiStatus = useSelector(selectApiStatus)

    const isProcessingItemAction = apiStatus.status !== 'fulfilled' && (apiStatus.type === 'updateTodo' || apiStatus.type === 'deleteTodo')

    const onToggle = () => {
        dispatch(updateTodo({
            ...task,
            completed: !task.completed
        }))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(task.id))
    }

    return (
        <li className={isDone(task.completed)}>
            <input disabled={isProcessingItemAction} onChange={onToggle} type={'checkbox'} checked={task.completed}/>
            <span>{task.title}</span>
            <button disabled={isProcessingItemAction} onClick={handleDelete}>X</button>
        </li>
    )
}

export default TaskItem