import React , {Component} from 'react';
import './project_id.css';

class project_id extends Component {

  constructor(props){
    super(props);
    thid.state={
      name:'';
      Date:'';
    }
    this.login = this.login/bind(this);
    this.onchange = this.onchange/bind(this);
  }

  login(){
    console.log("Login Function");
  }

  onChange(){
    console.log("coming here");
  }

  Render() {
    return(
      <div className="Content">
      <div className="column Bodypart">
        <h2>Create Project</h2>
        <label>Name</label>
        <input type="text" name="Name" placeholder="Name" onChange = {this.onChange}/>
          <label>Date</label>
          <input type="text" name="date" placeholder="date" onChange = {this.onChange}/>
          <label>Description</label>
          <input type="text" name="description" placeholder="description" onChange = {this.onChange}/>
          <input type="submit"   value="Login"   className="button" onClick={this.login}/>

      </div>
    </div>
    );
  }
}

export default Login
