import React from "react"

class Login extends React.Component {
    render(){
        return(
            <div className="dropdown-content">
    
                <h4>SIGN IN</h4>
                <div className="sign-in-form">
                    <form>
                        <input type="text" className="sign-in-username" placeholder="Enter Username" />
                        <input type="text" className="sign-in-password" placeholder="Enter Password" />
                        <button>SIGN IN</button>
                    </form>
                </div>
                <h6>OR</h6>
                <h6>New User? SIGN UP!!</h6>
            

            </div>
        )
    }
}

export default Login