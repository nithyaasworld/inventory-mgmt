import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { firebaseAuth } from "./firebase-config";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  const onLogin = () => {
    setError("");
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location = '/categories';
        console.log("set window location");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(`${errorCode}: ${errorMessage}`);
      });
  };
  return (
    <div className="login-container">
      <div className="input-boxes">
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="login-email-input-box"
          label="Email"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="login-password-input-box"
          label="Password"
        />
      </div>
      <div className="login-buttons">
        <Button onClick={onLogin} variant="contained" color="primary">
          Login
        </Button>
        <Button variant="contained" color="primary">
          {" "}
          <Link className="router-link" to="/signup">
            Signup
          </Link>
        </Button>
      </div>
      <Typography variant="subtitle2" component="p">
          {error}
        </Typography>
    </div>
  );
}
