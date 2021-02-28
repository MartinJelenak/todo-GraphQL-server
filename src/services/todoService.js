const MongoDbRepo = require('../repository/mongoDbRepository');

class TodoService {
    constructor() {
        this.TodoRepository = new MongoDbRepo('todos');
    }

    getAllTodos() {
        return this.TodoRepository.getAll();
    }

    updateTodo(_id, opt) {
        return this.TodoRepository.updateOne(_id, opt);
    }

    deleteTodo(_id) {
        return this.TodoRepository.deleteOne(_id);
    }

    createTodo(opt) {
        return this.TodoRepository.create(opt);
    }
}

module.exports = TodoService;