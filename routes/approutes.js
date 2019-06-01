'use strict';
module.exports = function(app) {
    let userController = require('../controller/newUserController');
    let userLoginController = require('../controller/loginController');
    let pitcherController = require('../controller/pitchersController');

    // todoList Routes
    app.route('/users/signup').post(userController.create_a_user);
    app.route('/users/login').post(userLoginController.login_user);
    app.route('/pitchers/update').post(pitcherController.update_pitcher);
    //
    // app.route('/tasks/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);
};