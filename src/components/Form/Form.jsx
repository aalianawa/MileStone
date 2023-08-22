import React from 'react'
import './form.css'



const Form = () => {

   
    return (
        <div classNameName='body'>
            <div className='selections'>
                <div className="container">
                    <div className="wrapper">
                        <div className="title"><span>Login Form</span></div>
                        <form action="#">
                            <div className="row">
                                {/* <i className="fas fa-user"></i> */}
                                <input type="text" placeholder="Email or Phone" required />
                            </div>
                            <div className="row">

                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="pass"><a href="#">Forgot password?</a></div>
                            <div className="row submit-button">
                                <button type="submit" value="Login"> Login </button>
                            </div>
                            <div className="signup-link">Not a member? Signup now</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form