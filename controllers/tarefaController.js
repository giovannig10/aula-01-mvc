import tarefaModels from "../todo-list-mvc/models/tarefaModels.js";

class TarefaController {
    getAll = (req, res) => {
        const tarefas = tarefaModel.getAll();
        res.json(tarefas);
    };
    create = ({body: { descricao }}, res) => {
        if (!descricao) {
            res.status(400).json({ message: 'Descrição é obrigatória' });
            return;
        }
        const novaTarefa = tarefaModel.create(descricao);
        res.status(201).json(novaTarefa);
}
update = ({ params: { id }, body: { finalizada } }, res) => {
    const tarefaAtualizada = tarefaModel.update(id, finalizada);
    if (!tarefaAtualizada) {
        return res.status(404).json({erro: 'Tarefa não encontrada'});
    }
    res.json(tarefaAtualizada);
};
delete = ({ params: { id } }, res) => {
    const removido = tarefaModel.delete(id);
    if (!removido) {
        return res.status(404).json({erro: 'Tarefa não encontrada'});
    }
    res.status(204).send();
};
}

export default new TarefaController();