// path: taskList/src/component/List/index.jsx
import './list.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectApiStatus, selectTasks} from "../../store/selector/index.js";
import TaskItem from "../TaskItem/index.jsx";
import {useEffect} from "react";
import {fetchTodos} from "../../store/Slice/taskSlice.js";
import Loader from "../Loader/index.jsx";

const List = () => {

    const dispatch = useDispatch()
    const tasks = useSelector(selectTasks)
    const apiStatus = useSelector(selectApiStatus)

    const isTasksLoading = apiStatus.type === 'fetchTodos' && apiStatus.status !== 'fulfilled'


    useEffect(() => {
        dispatch(fetchTodos())
    }, []);

    return (
        isTasksLoading ?
            <Loader />
            :
            tasks.length > 0 ?
                <ul id={"list"}>
                    {
                        tasks.map(task => {
                            return <TaskItem task={task} key={task.id} />
                        })
                    }
                </ul> :
                <p className={"noData"}>No task</p>
    )
}

export default List