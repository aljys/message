import React, { Component ,Fragment} from 'react';
import PropTypes from 'prop-types'//脚手架安装的
import './App.css'
class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            item:'',
            btnText:'提交'
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
    static propTypes={
        onReceiveItem:PropTypes.oneOfType([
            PropTypes.func
        ])
    }
  render() {
      console.log(PropTypes)
    return (
      <Fragment>
        <label htmlFor="ipt">请输入关键字:</label>
        <input
        type='text' 
        id="ipt"
        value={this.state.item}
        onKeyUp={this.handleKeyUp} 
        onChange={this.handleInputChange}
        />
        <button 
         className='btn'
         onClick={this.handleButtonClick}
        //  dangerouslySetInnerHTML={{__html:this.state.btnText}}
         
         >
         {this.state.btnText}
         </button>
      </Fragment>
    );
  }
}

export default Input;
