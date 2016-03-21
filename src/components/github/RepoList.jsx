import React, {Component} from 'react';
import Repo from './Repo.jsx';

class RepoList extends Component{

	render(){
		return(
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
		)
	}
  renderList(){
    return this.props.userRepos.map(repo => {
        return (
          <Repo repo={repo} key={repo.id} {...this.props} />
        );
      });
  }
}
export default RepoList
