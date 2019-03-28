import React, { Component ,Fragment} from 'react';
class List extends Component {
    constructor(props){
        super(props);
        this.state={
          list:['good','next','go']
      }
        this.del=this.del.bind(this);
    }
    del(index){
      let list=[...this.state.list];
      list.splice(index,1)
        this.setState({
            list
        })
  }
    componentWillReceiveProps(newProps){
      if(this.state.list!==newProps.items){
       let list=[...this.state.list,newProps.items];
       this.setState({
         list
       })
      }
    }
  render() {
    return (
      <Fragment>
        <ul>{
         this.state.list.map((value,index)=>{
           return <li key={index} onClick={()=>this.del(index)}>{value}</li>
        })
        }</ul>
      </Fragment>
    );
  }
}

export default List;
