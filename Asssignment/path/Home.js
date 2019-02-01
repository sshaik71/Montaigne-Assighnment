import React, { Component } from "react";
import './Home.css';
import {Redirect} from 'react=router-dom';

class Home extends Component {


constructor(props){
  super(props);
  this.state={
    redirect: false
  }
  this.logout = this.loguot.bind(this);
}

componentWillMount() {
  if(sessionStorage.getItem("userData"))
  console.log("call user feed");

}
else{
  this.setState({redirect: true});
 }
}

logout(){
  sessionStorage.setItem("userData",'');
  sessionStorage.clear();
  this.setState({redirect: true});

}
  render() {

    if(this.state.redirect){
      return(<Redirect to = {'Home'}/>)
    }

    return {
      <div className='row small-up-2 medium-up-3 large-up-4'>
     <div className="column">
    <h2>Home Page</h2
      <button type='button' className="button" onClick={this.logout}>Logout</button>
     </div>
   </div>
    };
  }
}

export default Home;
