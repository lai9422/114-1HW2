// server.js
const express = require('express');
const app = express();
const path = require('path');
const controller = require('./controller');

app.use(express.json()); // 解析 JSON

// 路由設定
app.get('/api/todos', controller.getTodos);
app.post('/api/todos', controller.createTodo);

// 提供前端頁面
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});