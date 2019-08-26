const express = require('express');
var bodyParser = require('body-parser');
const { Aluno } = require('./app/models');
const app = express();
var cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(bodyParser());

//==============================================================================================================
//======================= Rotas alunos --- Teste/Exemplo para aplicação ======================================
//Listar todos
app.get('/alunos', (req, res) => {
    Aluno.findAll().then(alunos => {
        res.json(alunos);
    })
});
// Criar novo Usuário
app.post('/alunos/salvar', async (req, res) => {
    const aluno = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        path_foto: req.body.path_foto
    };

    const novoAluno= await Aluno.create(aluno);
    res.json(novoAluno);
});
//Buscar por id --- chave primária.
app.get('/alunos/:id', async (req, res) => {
    Aluno.findByPk(req.params.id).then(aluno => {
        res.json(aluno);
    })
});
//Editar
app.put('/alunos/alterar/:id', async  (req, res) => {
    const alunoAterado = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        path_foto: req.body.path_foto
    };

    Aluno.update(
        {   nome:alunoAterado.nome,
            path_foto: alunoAterado.path_foto,
            endereco: alunoAterado.endereco },
        { where: { id: req.params.id } }
    );
    res.json(Aluno);
});
//Deletar
app.delete('/alunos/excluir/:id', async (req, res) => {
    const id = req.params.id;
    Aluno.destroy({
        where: {
            id: id //this will be your id that you want to delete
        }
    }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
        if(rowDeleted === 1){
            res.json('Deleted successfully');
        }
    }, function(err){
        res.json(err);
    });
});
//==============================================================================================================
//======================= FIM rotas usuários ===================================================================
app.post('/upload', async (req, res) => {
    console.log(req.body)

    res.json("ok");
});
//==============================================================================================================
//======================= UPLOAD DE ARQUIVOS ===================================================================


//==============================================================================================================
//======================= FIM UPLOAD DE ARQUIVOS ===============================================================

app.response.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
});
app.listen(3001);