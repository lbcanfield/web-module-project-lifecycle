// JavaScript Library Imports
import React from 'react';
import axios from 'axios';

// Class/Component Imports
import TodoList from '../components/TodoList';
import Form from '../components/Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      error_msg: ''
    }
  }

  componentDidMount() {
    console.log('Component Did Mount');
    axios.get(URL)
      .then(response => {
        // console.log(response.data.data);
        this.setState({ ...this.state, tasks: response.data.data })
      })
      .catch(error => {
        // console.error(error.response.data.message)
        this.setState({ ...this.state, error_msg: error.response.data.message })
      })
  }


  render() {
    console.log('Component Did Render to the Browser')
    return (
      <div>
        <div id='error'>{this.state.error_msg}</div>    {/*id (error) found in styles.css*/}
        < TodoList tasks={this.state.tasks} />
        <Form />
      </div >
    )
  }
}
