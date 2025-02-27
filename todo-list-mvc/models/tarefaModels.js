class tarefaModel {
    constructor() {
        this.tarefas = [{ id: 1, descricao: 'Estudar JavaScript', finalizada: true },
        ]
    }

    getAll = () => this.tarefas;

    create = (descricao) => {
        const novaTarefa = {
            id: this.tarefas.length + 1,
            descricao,
            finalizada: false
        };
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    };
    update = (id, finalizada) => {
        const tarefa = this.tarefas.find((t) => t.id === (id));
        if (tarefa) {
            tarefa.finalizada = finalizada;
            return tarefa;
        }
        return null;
    };
    delete = (id) => {
        const index = this.tarefas.findIndex((t) => t.id === id);
        if (index !== -1) {
            this.tarefas.splice(index, 1);
            return true;
        }
        return false
    };
}

export default new tarefaModel();
