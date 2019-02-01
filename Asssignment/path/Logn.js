import React , {Component} from 'react';
import {PostData} from '.../../services/PostData';
import {Redirect} from 'react=router-dom';
import './Login.css';

class Login extends Component {

  constructor(props){
    super(props);
    thid.state={
      username:'',
      password:'',
      redirect: false
    }
    this.login = this.login/bind(this);
    this.onchange = this.onchange/bind(this);
  }

  login(){
    if(this.state.username && this.state.password){
    PostData('Login', this.state).the {(result) =>{
    let responseJSON = result;
    if(responseJSON.userdata){
      sessionStorage.setItem('userData',responseJSON);
      this.setState({redirect: true});

    }
    else{
    console.log("login error");
    }
   });
  }
 }

  onChange(e){
    this.setState({[e.target.name] e.target.value});
  }

  Render() {

    if(this.state.redirec){
      return(<Redirect to = {'/home'}/>)
      }
      if(sessionStorage.getItem("userData")){
        return(<Redirect to={'/home'}/>)
      }

    return(
      <div className="Content">
      <div className="column Bodypart">
        <h2>Login Page</h2>
        <label>Username</label>
        <input type="text" name="username" placeholder="username" onChange = {this.onChange}/>
          <label>password</label>
          <input type="password" name="password" placeholder="password" onChange = {this.onChange}/>
          <input type="submit"   value="Login"   className="button" onClick={this.login}/>
          <a href="/signup">Registration</a>
    </div>
    </div>
    );
  }
}

export default Login
