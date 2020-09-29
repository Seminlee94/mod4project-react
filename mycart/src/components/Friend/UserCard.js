import React from "react"

const UserCard = (props) => {

    return (
        <div className="user-card"  style={{ display: "flex" }}>
            <h3>{props.user.name}</h3>
            <button>Delete Friend</button>
        </div>
        
    )
}

export default UserCard