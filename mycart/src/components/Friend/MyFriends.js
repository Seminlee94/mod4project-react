import React from "react"
import UserCard from "./UserCard.js";


class MyFriends extends React.Component {

    friends = () => {
        return this.props.friend.map(user => <UserCard key={user.id} user={user} deleteFriendHandler={this.props.deleteFriendHandler} /> )
      }

    render(){
        return(
            <div className="my-friends">
                <div className="friend-container-top">
                    My Friends
                </div>
                <div className="user-card-container">
                    {this.friends()}
                </div>
            </div>
        )
    }
}

export default MyFriends
