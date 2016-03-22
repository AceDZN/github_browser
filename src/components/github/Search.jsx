import React, {Component} from 'react';
class search extends Component{
  onSubmit(e){
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if(!username){
      alert('please enter username');
      return;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value="";
  }
  render(){
    return (<div>
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Search GitHub Users</label>
        <input type="text" ref="username" className="form-control" />
      </form>
    </div>);
  }
}

export default search
