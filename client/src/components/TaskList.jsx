import { useEffect, useState } from "react";
import {getAllTasks} from '../api/task.api';
import {TaskCard} from './TaskCard';

export const TaskList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async() => {
            const {data} = await getAllTasks();

            setData(data);
        })();
    }, []);

    return (
        <ul>
             {data?.length ? data.map((elem, index) => 
                (
                    <li key={`list-${index}`}>
                        <TaskCard data={elem}/>
                    </li>
                )
            ) : 
            <li>No tasks</li>
            }
        </ul>
    )
}