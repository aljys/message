import React, { Component ,Fragment} from 'react';
class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            item:''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleKeyUp=this.handleKeyUp.bind(this);    
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
        this.props.onReceiveItem(this.state.item)
        this.setState({
            item:''
        })
    }
    handleKeyUp(e){
        if(e.keyCode===13&&e.target.value){
         this.handleButtonClick();
        }
    }
  render() {
    return (
      <Fragment>
        <input type='text' value={this.state.item}  onKeyUp={this.handleKeyUp}  onChange={this.handleInputChange}/>
        <button onClick={this.handleButtonClick}>提交</button>
      </Fragment>
    );
  }
}

export default Input;
