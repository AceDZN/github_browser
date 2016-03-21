import React, {Component} from 'react';
import RepoList from './RepoList.jsx'

class Profile extends Component{

	render(){
		return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.userData.login}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={this.props.userData.avatar_url} className="thumbnail" style={{width: "100%"}} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <h4 className="col-md-12">
                  <span className="label label-primary">
                    {this.props.userData.public_repos} Repos
                  </span>
                  <span className="label label-success">
                    {this.props.userData.public_gists} Gists
                  </span>
                  <span className="label label-info">
                    {this.props.userData.followers} Followers
                  </span>
                  <span className="label label-danger">
                    {this.props.userData.following} Following
                  </span>
                </h4>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Full Name:</strong> {this.props.userData.name}</li>
                    <li className="list-group-item"><strong>Company:</strong> {this.props.userData.company}</li>
                    <li className="list-group-item"><strong>Location:</strong> {this.props.userData.location}</li>
                    <li className="list-group-item"><strong>Blog:</strong> <a href={this.props.userData.blog} className="" target="_blank">{this.props.userData.blog}</a></li>
                  </ul>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <a href={this.props.userData.html_url} className="btn btn-primary" target="_blank">
                    Visit Profile
                  </a>
                </div>
              </div>

            </div>
          </div>

          <hr />
          <h3>User Repositories</h3>
          <RepoList userRepos={this.props.userRepos} />
        </div>
      </div>
		)
	}
}
export default Profile
