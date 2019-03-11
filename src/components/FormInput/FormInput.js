import React, { Component } from 'react';
import '../../css/FormInput.css';

import { Form, Row, Col } from 'react-bootstrap';

class FormInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FormInput">
              <Row noGutters className="justify-content-center">
                <Col xs="6" md="3" lg="2">
                  <Form className="forminput__form">
                    <Form.Group controlId="form-location">
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="text" placeholder="City" />
                    </Form.Group>

                    <Form.Group controlId="form-drink">
                      <Form.Label>Drink choice</Form.Label>
                      <Form.Control as="select">
                        <option value="Wine">Wine</option>
                        <option value="Beer">Beer</option>
                        <option value="Tea">Tea</option>
                        <option value="Coffee">Coffee</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="form-cuisine">
                      <Form.Label>Cuisine choice</Form.Label>
                      <Form.Control as="select">
                        <option value="Chinese">Chinese</option>
                        <option value="Japanese">Japanese</option>
                        <option value="American">American</option>
                        <option value="Korean">Korean</option>
                        <option value="Italian">Italian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Filipino">Filipino</option>
                        <option value="Fusion">Fusion</option>
                        <option value="Thai">Thai</option>
                        <option value="Greek">Greek</option>
                        <option value="Armenian">Armenian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="German">German</option>
                        <option value="French">French</option>
                        <option value="Fast Food">Fast Food</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="form-dessert">
                      <Form.Label>Dessert choice</Form.Label>
                      <Form.Control as="select">
                        <option value="Ice cream">Ice cream</option>
                        <option value="Gelato">Gelato</option>
                        <option value="Frozen yogurt">Frozen yogurt</option>
                        <option value="Cakes">Cakes</option>
                        <option value="Pies">Pies</option>
                        <option value="Cookies">Cookies</option>
                        <option value="Cupcakes">Cupcakes</option>
                        <option value="Pastries">Pastries</option>
                      </Form.Control>
                    </Form.Group>

                  </Form>
                </Col>
              </Row>
              <form>
              </form>
            </div>
        )
    }
}

export default FormInput;
