// service.js
const todoModel = require('./model');

class TodoService {
    async getTodoList() {
        return await todoModel.getAll();
    }

    async addTodo(taskName) {
        // 業務邏輯檢查
        if (!taskName || taskName.trim() === "") {
            throw new Error("任務名稱不能為空！");
        }
        return await todoModel.create(taskName);
    }
}
module.exports = new TodoService();