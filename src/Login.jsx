import { Link } from "react-router-dom"
export default function Login(){
    return (
        <div className="login-container">
        <div className="input-boxes">
            <label htmlFor="email" >Login:</label>
            <input type="password" placeholder="Enter your email" id="email" name="email"></input>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password"></input>
        </div>
        <div className="login-buttons">
            <button>Login</button>
            <button><Link className="router-link" to="/signup">Signup</Link></button>
        </div>
        </div>
    )
}