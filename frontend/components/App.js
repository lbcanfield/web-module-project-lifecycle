// JavaScript Library Imports
import React from 'react';
import axios from 'axios';

// Class/Component Imports
import TodoList from '../components/TodoList';
import Form from '../components/Form';

const URL = 'http://localhost:9000/api/todos'
const error_msg = '';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
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
        if (error !== null) {
          error_msg = error
        }
        // console.error(error)
      })
  }


  render() {
    console.log('Component Did Render to the Browser')
    return (
      <div>
        <div id='error'>{error_msg}</div>    {/*id (error) found in styles.css*/}
        < TodoList />
        <Form />
      </div >
    )
  }
}
