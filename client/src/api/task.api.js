import axios  from "axios";

const API_URL = 'http://localhost:8000/tasks/api/v1/tasks/';
const taskApi = axios.create({
    baseURL: API_URL
});

export const getAllTasks = () => {
    return taskApi.get('/'); 
}

export const createTask = (task) => {
    return taskApi.post('/', task); 
}

export const deleteTask = (id) => {
    return taskApi.delete(`/${id}/`); 
}

export const updateTask = (id, task) => {
    return taskApi.put(`/${id}/`, task); 
}

export const getTask = (id) => {
    return taskApi.get(id); 
}