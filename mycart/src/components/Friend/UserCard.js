import React from "react"

const UserCard = (props) => {
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
                    <button>Join Cart</button>
                </div>
                <div>
                    <button onClick={()=>props.deleteFriendHandler(props.user.id)}>Delete Friend</button>
                </div>
            </div>
        </div>
        
    )
}

export default UserCard