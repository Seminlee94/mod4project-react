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
            <div className="signup-container">
                <div className="signup-container-top">
                    <h2>SIGN UP</h2>
                </div>
                <div className="signup-container-form">
                    <form onSubmit={this.submitHandler}>
                        <p><input type="text" name="username" placeholder="Enter your username" value={this.state.username} onChange={this.changeHandler}   /></p>
                        <p><input type="text" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.changeHandler}   /></p>
                        <p><input type="text" name="name" placeholder="Enter your name" value={this.state.name} onChange={this.changeHandler}   /></p>
                        <p><input type="text" name="address" placeholder="Enter your address" value={this.state.address} onChange={this.changeHandler}   /></p>
                        <p><input type="submit" value="Sign Up" /></p>
                    </form>
                </div>
                <div className="signup-container-bottom">
                    Have an account? 
                    <a className="login-signup-button" href="/login">
                        Log in
                    </a>
                </div>

            </div>
        )
    }


}

export default Signup