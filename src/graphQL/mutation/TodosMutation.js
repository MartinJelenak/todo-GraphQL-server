const { GraphQLString, GraphQLBoolean } = require("graphql");
const { todoType } = require('../nodeTypes');
const TodoService = require('../../services/TodoService');

const CreateTodoMutation = {
    type: todoType,
    args: {
        text: { type: GraphQLString },
        completed: { type: GraphQLBoolean }
    },
    resolve: async (_, { text, completed }) => {
        const todoService = new TodoService()
        const newTodo = await todoService.createTodo({ text, completed })

        return newTodo
    }
}

module.exports = { CreateTodoMutation };