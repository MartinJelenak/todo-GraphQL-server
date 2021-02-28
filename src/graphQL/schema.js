const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { TodosQuery } = require('./query/TodosQuery');
const {
    CreateTodoMutation,
    // UpdateTodoMutation,
    // DeleteTodoMutation
} = require('./mutation/TodosMutation');

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        todos: TodosQuery
    })
})

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createTodo: CreateTodoMutation,
        // deleteTodo: DeleteTodoMutation,
        // updateTodo: UpdateTodoMutation
    })
});

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });

module.exports = schema;