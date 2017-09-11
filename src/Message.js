import React, { Component } from 'react';
import './App.css';

/**
 * This Message component use props to generate a  message.
 * ---------------------
 * |      Message      |
 * ---------------------
 * |   message content |
 * ---------------------
 */
class Message extends Component{
    render() {
        return (
          <table className="center">
                <tbody>
                  <tr className="row_order">
                    <td>Message</td>
                  </tr>
                  <tr className="row_name">
                    <td>{this.props.message}</td>
                  </tr>
                </tbody>
          </table>
        )
    }
}

export default Message