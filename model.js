// model.js
// 模擬資料庫
const todos = [
    { id: 1, task: "學習 Express", done: false }
];

class TodoModel {
    getAll() {
        return Promise.resolve(todos);
    }

    create(taskName) {
        return new Promise((resolve) => {
            const newTodo = {
                id: todos.length + 1,
                task: taskName,
                done: false
            };
            todos.push(newTodo);
            resolve(newTodo);
        });
    }
}
module.exports = new TodoModel();