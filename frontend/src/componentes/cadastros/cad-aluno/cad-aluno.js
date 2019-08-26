import React, { Component }  from 'react';
import '../../App.css';
import axios from "axios";

const baseUrl = "http://localhost:3001/alunos"

const initialState = {
  aluno: { nome: "", endereco: "", path_foto: null},
}

class FormularioCadAlunos extends Component {

  state = { ...initialState }
  constructor(props){
    super(props)
    const id = window.location.href.split('/')[4];
    if (id) {
      const url = `${baseUrl}/${id}`
      axios["get"](url).then(aluno => {
        this.updateField({target:{
            name: "id", value:aluno.data.id
          }})
        this.updateField({target:{
            name: "nome", value:aluno.data.nome
          }})
        this.updateField({target:{
            name: "endereco", value:aluno.data.endereco
        }})
        this.updateField({target:{
          name: "path_foto", value:aluno.data.path_foto
        }})
      })
    }
  }
  clean() {
    this.setState({aluno: initialState})
  }

  save() {
    const aluno = this.state.aluno;
    const method = aluno.id ? "put" : "post"
    const url = aluno.id ? `${baseUrl}/alterar/${aluno.id}` : `${baseUrl}/salvar`

    axios[method](url, aluno).then(resp => {
      this.clean()
      window.location.href= "/alunos";
    })
  }

  updateField(event) {
    const aluno = { ...this.state.aluno }
    aluno[event.target.name] = event.target.value
    this.setState( { aluno })
  }

  formulario() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input type="text"
                     className="form-control"
                     name="nome"
                     value={this.state.aluno.nome}
                     onChange={e => this.updateField(e)}
                     placeholder="Digite o nome ..." />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label> Endereço</label>
              <input type="text"
                     className="form-control"
                     name="endereco"
                     value={this.state.aluno.endereco}
                     onChange={e => this.updateField(e)}
                     placeholder="Digite o endereço completo ..." />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label> Foto</label>
              <input type="text"
                     className="form-control"
                     name="path_foto"
                     value={this.state.aluno.path_foto}
                     onChange={e => this.updateField(e)}
                     placeholder="Insira tua foto ..." />

            </div>
          </div>
        </div>
        <hr/>

        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className='btn btn-primary'
                    onClick={e => this.save(e)}>
              Salvar
            </button>
            <button className="btn btn-secondary ml-2"
                    onClick={e => this.clear(e)}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )

  }
  render() {
    return (
      <div className="App">
        {this.formulario()}
      </div>
    );
  }
}

export default FormularioCadAlunos;
