import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form id='todoForm'>
        <input
          type='text'
          placeholder='Type todo'>
        </input>
        <button type='submit'>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    )
  }
}
