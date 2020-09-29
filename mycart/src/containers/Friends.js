import React from 'react'
import MyFriends from "../components/Friend/MyFriends"
import { Redirect } from "react-router-dom";
import SearchUserForm from "../components/Friend/SearchUserForm"
// import SearchedUsers from "../components/Friend/SearchedUsers"
import SearchUserCard from "../components/Friend/SearchUserCard"
import "../components/Friend/friend.css"


class Friends extends React.Component {

  state = {
    userArray: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(resp => resp.json())
      .then(data => this.setState({ userArray: data }))
  }

  searchUser = () => {
    let findUser = this.state.userArray.find(el => el.username.toLowerCase()===this.state.searchTerm.toLowerCase())
    return <SearchUserCard user={findUser} addFriendHandler={this.props.addFriendHandler} />
  }

  submitHandler = (term) => {
    this.setState({
      searchTerm: term.searchTerm
    })
  }


  render(){

    return (
      <>
        {this.props.user ? 

          <div>
            <div>
              <SearchUserForm value={this.state.searchTerm} submitHandler={this.submitHandler} />
            </div>
            <div className="user-container" style={{ display:"flex" }} >
              <MyFriends friend={this.props.friends} />
              {/* <SearchedUsers user={this.searchUser()} /> */}
              <div className="searched-users">{this.state.searchTerm==="" ? null : this.searchUser()}</div>
            </div>
          </div>
        
        :
        
          <Redirect to="/" />
        
        
        }
      </>
 
    )
  }
}

export default Friends