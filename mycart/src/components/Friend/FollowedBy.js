import React from "react"
import FollowedUserCard from "./FollowedUserCard.js";


class FollowedBy extends React.Component {

    friends = () => {
        return this.props.friend.map(user => <FollowedUserCard 
            key={user.id} 
            user={user} 
            addFriendHandler={this.props.addFriendHandler}
            /> 
        )
      }

    render(){
        return(
            <div className="my-friends">
                <div className="friend-container-top">
                    I am followed by...
                </div>
                <div className="user-card-container">
                    {this.friends()}
                </div>
            </div>
        )
    }
}

export default FollowedBy
