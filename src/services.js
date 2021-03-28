import {request} from './utils/request'

// list tasks
export const listTasks = payload => {
    return request.get('/v1/task')
}

// update tasks
export const updateTasks = ({id, data}) => {
    return request.patch(`/v1/task/${id}`, data)
}

// list tasks state
export const listTaskStates = payload => {
    return request.get('/v1/task-state')
}

// update tasks state
export const updateTaskState = ({id, data}) => {
    return request.patch(`v1/task-state/${id}`, data)
}

// create task state
export const createTaskState = ({ data}) => {
    return request.post(`v1/task-state/`, data)
}

// delete task state
export const deleteTaskState = ({ id }) => {
    return request.delete(`v1/task-state/${id}`)
}