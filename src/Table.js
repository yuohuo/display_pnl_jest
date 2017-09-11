import React, { Component } from 'react';
import './App.css';

/**
 * This Table component use props to generate a table.
 * 
 */
class Table extends Component{
    render() {
      // throw new Error('I crashed!!!!!!');
        return (
          <table className="center">
          {this.props.data.map((item, key) => {
            return (
                <tbody key={key}>
                  <tr className="row_order">
                    <td>{item.orderId}</td>
                  </tr>
                  {item.passengerList.map((item, key) => {
                    return (
                      <tr key={key} className="row_name"><td>{item.name}</td></tr>
                      )
                  })}
                </tbody>
              )})}
          </table>
        )
    }
}

export default Table