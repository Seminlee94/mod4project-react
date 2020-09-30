import React from "react"

const SearchUserCard = (props) => {

    return (
        <div className="search-user-card">
            <div className="search-user-info">
                <h5>Username</h5>
                <p className="search-user-name">{props.user.name}</p>
            </div>
            <div className="search-user-button">
                <button onClick={()=>props.addFriendHandler(props.user.id)}>Add User</button>
            </div>
        </div>
        
    )
}

export default SearchUserCard