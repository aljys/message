import React, { Component ,Fragment} from 'react';
import List from './List.js'
import Input from './Input.js'

class TodoList extends Component {
  constructor(props){
      super(props);
      this.state={
          list:['good','next','go']
      }
      this.handleReceive=this.handleReceive.bind(this);
      this.handDel=this.handDel.bind(this);
  }
  handDel(index){
      let list=[...this.state.list];
      list.splice(index,1)
        this.setState({
            list
        })
  }
  handleReceive(item){
    let list=[...this.state.list,item]
    this.setState({
        list
    })
  }
  render() {
    return (
      <Fragment>
         <Input onReceiveItem={this.handleReceive}/>
         <List 
         onDel={this.handDel}
         items={this.state.list}
         />
      </Fragment>
    );
  }
}

export default TodoList;