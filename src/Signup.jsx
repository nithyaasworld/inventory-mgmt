import { useState } from "react";
import { firebaseAuth } from "./firebase-config";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function SignUp() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmaPassword] = useState("");
  let [error, setError] = useState("");

  const signupFunction = () => {
    setError("");
    console.log("signupFunction is called");
    console.log("email is: ", email);
    console.log(password);
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        setError(`${errorCode}: ${errorMessage}`);
      });
  };
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <div className="input-boxes">
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="signup-email"
          label="Email"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="signup-password"
          label="Password"
          type="password"
        />
        <TextField
          onChange={(e) => setConfirmaPassword(e.target.value)}
          id="signup-confirm-password"
          label="Confirm Password"
          type="password"
        />
      </div>
      <Button variant="contained" color="primary" onClick={signupFunction}>
        Submit
      </Button>
      <Typography variant="subtitle2" component="p">
        {error}
      </Typography>
    </div>
  );
}