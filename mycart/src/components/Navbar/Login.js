import React from "react";
import Form from "react-bootstrap/Form";

class Login extends React.Component {

    state = {
        username: "",
        password: ""
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
            <div className="login-container" style={{ display: "flex" }} >
                <div className="app-description">
                    <h3>Welcome to Cart-in!</h3> 
                    <h5>Our app includes:</h5> 
                    <ol className="app-description-list">
                        <li>Shop for groceries</li>
                        <li>Add items to the fridge</li>
                        <li>Look up recipes with items in the fridge</li>
                        <li>Add friend to the friend list</li>
                        <li>Add up to 2 friends to your cart so you and your friends can save delivery fee, tip fee, etc.</li>

                    </ol>
                    
                    Please sign in to look around!
                </div> 
                <div className="login-container-right">
                    <div 
                      className="login-container-top"
                      style={{
                        width: "600px",
                        margin: "auto",
                        marginTop: "22px",
                      }}>
                        <h2>SIGN IN</h2>
                    </div>
                    <Form
                      style={{
                        width: "600px",
                        margin: "auto",
                        marginTop: "22px",
                        marginBottom: "35px",
                      }}
                      onSubmit={this.submitHandler}
                    >
                      <Form.Control
                        size="lg"
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.changeHandler}
                      />
                      <Form.Control
                        size="lg"
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                      />
                      <input type="submit" value="Log in" />
                    </Form>
                    <div className="login-container-form">
                        <form onSubmit={this.submitHandler}>
                            <p><input type="text" name="username" placeholder="Enter your username" value={this.state.username} onChange={this.changeHandler} /></p>
                            <p><input type="text" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.changeHandler} /></p>
                            <input type="submit" value="Log in" />
                        </form>
                    </div>
                    <div className="login-container-bottom">

                        Not signed up yet? 
                        <a className="login-signup-button" href="/signup">
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        )
    }


}

export default Login


