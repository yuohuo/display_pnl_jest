import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Table from './Table';
import ErrorBoundary from './ErrorBoundary';

/**
 * This ErrorMsg component use props to generate a error message.
 * 
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

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    /**
     * use Jquery to get data from webservice API
     * @prop  dataType: set to JSONP to solve crose origin issue
     * @prop  error: use object jqXHR to throw error
     * @return set Object List into State
     */
    _accessAPI() {
        $.ajax({
            url: "http://localhost:8080/orderList",
            type: "GET",
            dataType: 'JSON',
            ContentType: 'application/json',
            success: function(data, status) {
                this.setState({ data: data, status: status });
                console.log("status: " + status + "\ndata: " + data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.url, status, err.toString());
                this.setState({ status: status });
            }.bind(this)
        })

    }

    componentDidMount() {
        return this._accessAPI();
    }

    render() {
        if (JSON.stringify(this.state.data) !== "[]") {
            return ( 
              <ErrorBoundary>
                <Table data = { this.state.data }/>
              </ErrorBoundary>
            )
        } else if (this.state.status === "error"){
            return <Message message = { "Service unavailable. Please try again later." }/>
        } else { 
          return <Message message = { "loading..." }/>
        }
    }
}

export default App;