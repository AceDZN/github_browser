import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import Profile from "./github/Profile.jsx"


class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			username: "AceDZN",
			userData: [],
			userRepos: [],
			perPage: 10
		}
	}

	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+"&client_secret="+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({
					userData: data
				});
			}.bind(this),
			error: function(xhr,status,err){
				this.setState({
					username: null
				});
				alert("error:"+err);
			}.bind(this)

		})
	}
	getUserRepos(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&sort=created&client_id='+this.props.clientId+"&client_secret="+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({
					userRepos: data
				});
				console.log(data,"repos");
			}.bind(this),
			error: function(xhr,status,err){
				this.setState({
					username: null
				});
				alert("error:"+err);
			}.bind(this)

		})
	}

	componentDidMount(){
		this.getUserData();
		this.getUserRepos();
	}
	render(){
		return(
			<div>
				<Profile {...this.state} />
			</div>
		)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
}

App.defaultProps ={
	clientId: 'd403f9a943d361c10425',
	clientSecret: '5acc16a40ed1a1dd5548d9d5a1e459fddb367ea5'
}

export default App
