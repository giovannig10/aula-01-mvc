import express from 'express';
import tarefaRouter from './routes/tarefaRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tarefas', tarefaRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });