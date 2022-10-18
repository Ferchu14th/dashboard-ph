import React, { Component } from 'react';

class ChartRow extends Component {
    constructor(props) {
        super(props); //ejecuta el constructor de component que es una clase de react
        this.state = {
        };
      }
      render() {
          return (
                  <tr>
                      <td>{this.props.item.id}</td>
                      <td>{this.props.item.brand}</td>
                      <td>{this.props.item.description}</td>
                      <td>{this.props.item.price}</td>
                  </tr>
              )
      }
    }

export default ChartRow;