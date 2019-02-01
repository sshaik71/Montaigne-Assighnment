import React , {Component} from 'react';
import {PostData} from '.../../services/PostData';
import {Redirect} from 'react=router-dom';
import './Signup.css';

class Signup extends Component {

  constructor(props){
    super(props);
    thid.state={
      username:'',
      password:'',
      email:'',
      redirect: false
    }
    this.signup = this.signup/bind(this);
    this.onchange = this.onchange/bind(this);
  }

  Signup(){
    if(this.state.username && this.state.password){
    PostData('Signup', this.state).the {(result) =>{
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


render() {
  if(this.state.redirec){
    return(<Redirect to = {'/home'}/>)
    }
    if(sessionStorage.getItem("userData")){
      return(<Redirect to={'/home'}/>)
    }

return {
  <div className="Content">
  <div className="column Bodypart">
    <h2>Signup Page</h2>
    <label>Username</label>
    <input type="text" name="username" placeholder="username" onChange = {this.onChange}/>
      <label>password</label>
      <input type="password" name ="password"   placeholder="password" onChange = {this.onChange}/>
      <label>email</label>
      <input type="email"   value="email"   className="email" onClick={this.signup}/>
      <label>Name</label>
     <inputtype="text" name ="name"   placeholder="name" onChange = {this.onChange}/>
      <input type="submit"   value="Signup"   className="button" onClick={this.signup}/>
      <a href="/signup">Registration</a>
 </div>
   </div>

    };
  }
}

export default Home;
