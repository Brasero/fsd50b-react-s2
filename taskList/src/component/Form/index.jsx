// path: taskList/src/component/Form/index.jsx
import "./form.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectApiStatus, selectTask} from "../../store/selector/index.js";
import {addTodo, fetchTodos, setTaskTitle} from "../../store/Slice/taskSlice.js";

const Form = () => {

    const dispatch = useDispatch()

    const task = useSelector(selectTask)
    const apiStatus = useSelector(selectApiStatus)

    const isLoadingAddAction = apiStatus.type === 'addTodo' && apiStatus.status !== 'fulfilled'


    const {title} = task

    const handleChange = (e) => {
        const {value} = e.target
        dispatch(setTaskTitle(value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() === '') {
            return
        }
        dispatch(addTodo(task))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a task</h3>
            <input onChange={handleChange} value={title} type="text" name="title" />
            <input type={"submit"} disabled={isLoadingAddAction} value={'Add'}/>
            {
                isLoadingAddAction && <p>Processing...</p>
            }
        </form>
    )
}

export default Form