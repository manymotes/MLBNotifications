'use strict';
module.exports = function(app) {
    var userController = require('../controller/appController');

    // todoList Routes
    app.route('/users')
        .post(userController.create_a_user);
    //
    // app.route('/tasks/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);
};