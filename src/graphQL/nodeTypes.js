const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql');

const todoType = new GraphQLObjectType({
    name: 'todo',
    fields: {
        _id: { type: GraphQLID },
        text: { type: GraphQLString },
        completed: { type: GraphQLBoolean }
    }
})

module.exports = { todoType };