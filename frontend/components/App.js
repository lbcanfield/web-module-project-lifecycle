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

  taskCompleted = (value) => event => {
    event.preventDefault();
    console.log(value);
    axios.patch(`${URL}/${value}`)
      .then(response => {
        this.getTasks()
      })
      .catch(this.requestErrorMsg)
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      ...this.state, tasks: this.state.tasks.filter(task => {
        if (!task.completed) {
          return task;
        }
      })
    })
  }

  requestErrorMsg = (error) => {
    this.setState({ ...this.state, error_msg: error.response.data.message })
  }

  getTasks = () => {
    axios.get(URL)
      .then(response => {
        // console.log(response.data.data);
        this.setState({ ...this.state, tasks: response.data.data })
      })
      .catch(error => {
        // console.error(error.response.data.message)
        this.requestErrorMsg(error);
      })
  }

  pushTask = (newTask) => {
    console.log(newTask);
    axios.post(URL, { name: newTask })
      .then(response => {
        this.getTasks();
      })
      .catch(error => {
        // console.error(error.response.data.message)
        this.requestErrorMsg(error);

      })

  }

  componentDidMount() {
    console.log('Component Did Mount');
    this.getTasks();
  }

  render() {
    // console.log('Component Did Render to the Browser')
    // console.log(this.state.tasks)
    return (
      <div>
        <div id='error'>{this.state.error_msg}</div>    {/*id (error) found in styles.css*/}
        < TodoList taskCompleted={this.taskCompleted} tasks={this.state.tasks} />
        <Form URL={URL} pushTask={this.pushTask} clearCompleted={this.clearCompleted} />
      </div >
    )
  }
}
