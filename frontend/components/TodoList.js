import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
      <div id='todos'>                              {/*id (todos) found in styles.css*/}
        <h2>Todos:</h2>
        <div>Mock Task 1</div>
        <div>Mock Task 2</div>
        <div>Mock Task 3</div>
        <div>Mock Task 4</div>
      </div>
    )
  }
}
