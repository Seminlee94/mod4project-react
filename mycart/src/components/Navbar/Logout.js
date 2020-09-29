import React from "react"

class Logout extends React.Component {


    render() {
        return (
            <div onClick={this.props.logoutHandler}>
                <button>Log Out</button>
            </div>
        )
    }
}

export default Logout