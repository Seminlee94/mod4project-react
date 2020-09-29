import React from "react"

class Signup extends React.Component {

    state = {
        username: "",
        password: "",
        name: "",
        address: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler}   />
                <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}   />
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.changeHandler}   />
                <input type="text" name="address" placeholder="address" value={this.state.address} onChange={this.changeHandler}   />
                <input type="submit" value="Sign Up" />
            </form>
        )
    }


}

export default Signup