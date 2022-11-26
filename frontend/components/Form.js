import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    }
  }

  taskInputHandler = event => {
    event.preventDefault();
    this.setState({ ...this.state, task: event.target.value })
  };

  submitTask = event => {
    event.preventDefault();
    // alert('The Submit button was pressed')
  }
  render() {
    return (
      <form onSubmit={this.submitTask} id='todoForm'>
        <input
          name='taskInput'
          type='text'
          placeholder='Type todo'
          value={this.state.task}
          onChange={this.taskInputHandler}
        >

        </input>
        <button type='submit'>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    )
  }
}
