// controller.js
const todoService = require('./service');

exports.getTodos = async (req, res) => {
    try {
        const data = await todoService.getTodoList();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createTodo = async (req, res) => {
    try {
        const { task } = req.body;
        const newTodo = await todoService.addTodo(task);
        res.status(201).json(newTodo); // 201 Created
    } catch (err) {
        if (err.message === "任務名稱不能為空！") {
            res.status(400).json({ error: err.message }); // 400 Bad Request
        } else {
            res.status(500).json({ error: "伺服器錯誤" });
        }
    }
};