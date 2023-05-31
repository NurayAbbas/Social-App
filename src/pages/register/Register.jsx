import './register.css'

export default function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h1 className="loginLogo">Lamasocial</h1>
            <span className="loginDesc"> Connect with friends and the world around you on Lamasocial.</span>
        </div>
        <div className="loginRight">
        <div className="loginBox">
            <input type="text" placeholder='Username' className="loginInput" />
            <input type="text" placeholder='Email' className="loginInput" />
            <input type="text" placeholder='Password' className="loginInput" />
            <input type="text" placeholder='Password' className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">Log into Account</button>
        </div>
        </div>
      </div>
    </div>
  )
}

