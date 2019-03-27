import React, { Component ,Fragment} from 'react';
class List extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
        this.del=this.del.bind(this);
    }
    del(index){
        //更新数据
        this.props.onDel(index);
    }
  render() {
    
    return (
      <Fragment>
        <ul>{
         this.props.items.map((value,index)=>{
           return <li key={index} onClick={()=>this.del(index)}>{value}</li>
        })
        }</ul>
      </Fragment>
    );
  }
}

export default List;
