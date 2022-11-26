import React from 'react'
import TodoList from '../components/TodoList';
import Form from '../components/Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }
  render() {
    console.log('Component Did Render to the Browser')
    return (
      <div>
        <div id='error'>ERROR MESSAGE</div>    {/*id (error) found in styles.css*/}
        <TodoList />
        <Form />
      </div>
    )
  }
}
