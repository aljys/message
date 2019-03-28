import React, { Component ,Fragment} from 'react';
import List from './List.js'
import Input from './Input.js'

class TodoList extends Component {
  constructor(props){
      super(props);
      this.state={
          items:[]
      }
      this.handleReceive=this.handleReceive.bind(this);
  }

  handleReceive(item){
    let items=[...this.state.items,item]
    this.setState({
        items
    })
  }
  render() {
    return (
      <Fragment>
         <Input 
         onReceiveItem={this.handleReceive}
         />
         <List 
         items={this.state.items}
         />
      </Fragment>
    );
  }
}

export default TodoList;