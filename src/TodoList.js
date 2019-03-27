import React, { Component ,Fragment} from 'react';
import List from './List.js'
class TodoList extends Component {
  constructor(props){
      super(props);
      this.state={
          item:'',
          list:['good','next','go']
      }
      this.handleInputChange=this.handleInputChange.bind(this);
      this.handleButtonClick=this.handleButtonClick.bind(this);
      this.handleKeyUp=this.handleKeyUp.bind(this);
      this.handDel=this.handDel.bind(this);
  }
  handleInputChange(e){
      if(!e.target.value){
          return ;
      }
      this.setState({
        item:e.target.value
      })
  }
  handleButtonClick(){
      if(!this.state.item){
          return;
      }
      let list=[...this.state.list,this.state.item];
      this.setState({
          list,
          item:''
      })
  }
  handleKeyUp(e){
      console.log()
      if(e.keyCode===13&&e.target.value){
       this.handleButtonClick();
      }
  }
  handDel(index){
      let list=[...this.state.list];
      list.splice(index,1)
        this.setState({
            list
        })
  }
  render() {
    return (
      <Fragment>
         <input type='text' value={this.state.item}  onKeyUp={this.handleKeyUp}  onChange={this.handleInputChange}/>
         <button onClick={this.handleButtonClick}>提交</button>
         <List 
         onDel={this.handDel}
         items={this.state.list}
         />
      </Fragment>
    );
  }
}

export default TodoList;