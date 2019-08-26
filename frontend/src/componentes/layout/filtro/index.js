import React, { Component } from "react";
import "./index.css";
import { Container, Row, Form, FormLabel } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

class Index extends Component {
  render = () => {
    return (
      <Form className="filtro">
        <Container>
          <Row>
            <FormLabel > Filtrar por nome </FormLabel>
            <InputGroup>
              <input id={'nome'}
                     name={'nome'}
                     placeholder={'Digite o nome da pessoa e clica em filtrar!'}
                     onChange={e => this.props.filtrar && this.props.filtrar(e.target.value)}>
              </input>
            </InputGroup>
          </Row>
        </Container>
      </Form>
    );
  };
}

export default Index;
