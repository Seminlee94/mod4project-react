import React from "react"

const FollowedUserCard = (props) => {

    return (
        <div className="user-card">
            
            <div className="user-card-info">
                <div>
                    {props.user.username}
                </div>
                <div>
                    {props.user.name}
                </div>
            </div>
            <div className="user-card-buttons">
                <div className="join-cart-button">
                    <button onClick={()=>props.addFriendHandler(props.user.id)}>Add User</button>
                </div>
                
            </div>
        </div>
        
    )
}

export default FollowedUserCard