'use strict';
module.exports = function(app) {
    var userController = require('../controller/newUserController');
    let userLoginController = require('../controller/loginController');

    // todoList Routes
    app.route('/users/signup')
        .post(userController.create_a_user);
    app.route('/users/login').post(userLoginController.loginUser)
    //
    // app.route('/tasks/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);
};