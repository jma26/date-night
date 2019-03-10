import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Form">
              <form>
                <label>Location</label>
                <input type="text" />
                <label>Drink choice</label>
                <select>
                  <option value="Wine">Wine</option>
                  <option value="Beer">Beer</option>
                  <option value="Tea">Tea</option>
                  <option value="Coffee">Coffee</option>
                </select>
                <label>Cuisine choice</label>
                <select>
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
                </select>
                <label>Dessert choice</label>
                <select>
                  <option value="Ice cream">Ice cream</option>
                  <option value="Gelato">Gelato</option>
                  <option value="Frozen yogurt">Frozen yogurt</option>
                  <option value="Cakes">Cakes</option>
                  <option value="Pies">Pies</option>
                  <option value="Cookies">Cookies</option>
                  <option value="Cupcakes">Cupcakes</option>
                  <option value="Pastries">Pastries</option>
                </select>
              </form>
            </div>
        )
    }
}

export default Form;
