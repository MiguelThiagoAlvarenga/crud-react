import React, { Component } from "react";
import "./index.css";
import {Container, Row, FormLabel} from "react-bootstrap";
import Grid from "../../layout/grid";
import axios from "axios";

const baseUrl = "http://localhost:3001/alunos"

const initialState = {
  alunos: []
}

class Alunos extends Component {

  state = { ...initialState }

  componentWillMount() {
    axios(baseUrl).then(resp => {
      this.setState({ alunos: resp.data })
    })
  }

  render() {

    const confPagincao = {
      custom: true,
      paginationSize: 5,
      sizePerPage: 5,
      pageStartIndex: 1,
      firstPageText: 'Primeira',
      prePageText: 'Anterior',
      nextPageText: 'Próxima',
      lastPageText: 'Ultima',
      nextPageTitle: 'Próxima página',
      prePageTitle: 'Página anterior',
      firstPageTitle: 'Próxima página',
      lastPageTitle: 'Última página',
      showTotal: true,
      totalSize: this.state.alunos.length
    };

    function inserirEditarAluno(id){
      window.location.href= id ? "/editar-aluno/" + id : "/novo-aluno";
    }

    function removerAluno(id){
      const url = `${baseUrl}/excluir/${id}`
      axios["delete"](url).then(resp => {
        window.location.href= "/alunos";
    })
    }

    return (
      <div  className="App">
        <div className="Conteudo">

          <Container>
            <Row>
              <FormLabel className="Titulo"> Alunos </FormLabel>
            </Row>
          </Container>

          <Grid
                produtos={ this.state.alunos }
                options={confPagincao}
                buttonShow={true}
                click={() => inserirEditarAluno && inserirEditarAluno(null)}
                clickEditar={e => inserirEditarAluno && inserirEditarAluno(e)}
                clickExcluir={e => removerAluno && removerAluno(e)}/>
        </div>
      </div>
    );
  };
}

export default Alunos;
