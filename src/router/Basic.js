import React,{Component,Fragment} from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from 'react-router-dom'
import './router.css'
export default class Basic extends Component{
    render(){
        return (
            <Fragment>
                <Router>
                <ul>
                    <li><NavLink activeClassName='active' to='/home' >首页</NavLink></li>
                    <li><NavLink activeClassName='active' to='/search' >搜索</NavLink></li>
                    <li><NavLink activeClassName='active' to='/self' >我的</NavLink></li>
                </ul>
                <hr/>
                <Switch>
                    <Redirect exact from='/' to='/home'/>
                    <Route exact path="/home" component={Home} />
                    <Route  path="/search" component={Search} />
                    <Route path="/self" component={Self} />
                    <Route  component={Page404} />
                </Switch>
                 </Router>
            </Fragment>
        )
    }
}
const Home = ({match})=>{
 return (
    <div>Home</div>
    
 )
}
const Search = ()=>{
    return (
        <div>Search</div>
    )
   }
const Self = ({match})=>{
    return (
        <Fragment>
        <ul>
            <li><Link to={`${match.url}/son1`} >子1</Link></li>
            <li><Link to={`${match.url}/son2`} >子2</Link></li>
            <li><Link to={`${match.url}/son3`} >子3</Link></li>
        </ul>
         {/* <Route path={`${match.url}/son1`}  component={Son1} />
         <Route path={`${match.url}/son2`}  component={Son2} /> */}
         <Route path={`${match.url}/:type(son1)`}  component={Son3} />
     </Fragment>
    )
}

// const Son1 = ({match})=>{
//     return (
//         <h1>`${match.params}`</h1>
//     )
// }
// const Son2 = ({match})=>{
//     return (
//         <h1>子2</h1>
        
//     )
// }
const Son3 = ({match})=>{
    return (
        <h1>子3</h1>
        
        // <div>Son3</div>
    )
}
const Page404 = ()=>{
    return (
        <h1>404Page</h1>
    )
}