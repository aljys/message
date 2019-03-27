import React, { Component ,Fragment} from 'react';
import TodoList from './TodoList.js'
class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoList/>
      </Fragment>
    );
  }
}

export default App;
