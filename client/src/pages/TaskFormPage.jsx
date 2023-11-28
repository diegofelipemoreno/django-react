import {useForm} from 'react-hook-form';
import {createTask, deleteTask, updateTask, getTask} from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function TasksFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async(data) => {
        if (params?.id) {
            await updateTask(params?.id, data);
        } else {
            await createTask(data);
        }

        navigate('/');
    });

    const onDelete = (async() => {
        const accepted = window.confirm(`Do you want to delete task ${params?.id}`);

        if (accepted) {
            await deleteTask(params?.id);
            navigate('/');
        }
    });

    useEffect(() => {
        (async() => {
            if (params?.id) {
                const {data: {title, description}} = await getTask(params?.id);

                setValue('title', title);
                setValue('description', description);
            }
        })();
    }, [params?.id, setValue]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title" {...register('title', {required: true})}/>
                {errors.title && <span>Is required</span>}
                <textarea rows="3" placeholder="Description" {...register('description', {required: true})}></textarea>
                {errors.description && <span>Is required</span>}
                <button>Save</button>
            </form>
            { params?.id ? 
                <button onClick={onDelete}>Delete</button>
                : null
            }
        </>
    )
}