import client from './index';

const _genId = () => `${Math.random().toString().substr(2, 10)}`;

const getTodos = async() => await client.get('/todos');
const postTodos = async(title) => await client.post('/todos', { id: _genId(), title});
const removeTodos = async(id) => await client.delete(`/todos/${id}`);

export {
    getTodos,
    postTodos,
    removeTodos
};