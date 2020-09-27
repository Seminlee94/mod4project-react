import React from "react"
import UserCard from "./UserCard.js";


class MyFriends extends React.Component {

    friends = () => {
        return this.props.friend.map(user => <UserCard key={user.id} user={user} /> )
      }

    render(){
        return(
            <div className="my-friends">
                All Users
                {this.friends()}
            </div>
        )
    }
}

export default MyFriends
