import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';
import {textFilter} from "react-bootstrap-table2-filter";

class Grid extends Component {

  render() {

    //Campos das colunas, configuração do grid.
    const colunas = [
      {
        dataField: 'id',
        text: 'Id.'
      }, {
        dataField: 'nome',
        text: 'Nome do aluno',
        filter: textFilter()
      }, {
        dataField: 'endereco',
        text: 'Endereço',
        filter:textFilter()
      }, {
        dataField: 'path_foto',
        text: 'Imgem',
        filter:textFilter()
      }, {
        dataField: '',
        text: 'Ações',
        formatter: (cellContent, row) => (
          <div className="btn_grid">
            <Button type="button"  className="btn btn-warning btn_editar" onClick={()=> this.props && this.props.clickEditar && this.props.clickEditar(row.id)}>Editar</Button>
            <Button type="button"  className="btn btn-danger ml-2" onClick={() => this.props &&  this.props.clickExcluir && this.props.clickExcluir(row.id)}>Excluir</Button>
          </div>
        )
      }
    ];
    const contentTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <PaginationListStandalone { ...paginationProps } />
        <div>
          <div>
            <BootstrapTable
              striped
              hover
              keyField="id"
              data={ this.props.produtos }
              columns={ colunas }
              filter={ filterFactory() }
              { ...paginationTableProps }
            />
          </div>
        </div>
        <PaginationListStandalone { ...paginationProps } />
      </div>
    );

    return (
      <div className="form">
        <div>
          <div>
            {this.props.buttonShow && (
              <Button type="button" onClick={e => this.props.click && this.props.click(e)}>Novo Aluno</Button>
            )}
            <PaginationProvider
              pagination={
                paginationFactory(this.props.options)
              }>

              { contentTable }
            </PaginationProvider>
          </div >
        </div>
      </div>
    );
  };
}

export default Grid;
