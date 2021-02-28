const { todoType } = require('../nodeTypes');
const { GraphQLList } = require('graphql');
const TodoService = require('../../services/TodoService');



const TodosQuery = {
    type: GraphQLList(todoType),
    args: {},
    resolve: async () => {
        const todoService = new TodoService()
        const todos = await todoService.getAllTodos()

        return todos
    }
}

module.exports = { TodosQuery }