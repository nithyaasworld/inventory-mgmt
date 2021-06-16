import { useState, useEffect } from "react";
import { firebaseAuth } from "./firebase-config";

export default function SignUp() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmaPassword] = useState("");
    // let [disabled, setDisabled] = useState(true);

    useEffect(()=>{
        console.log(email);
    }, [email]);
  
    const signupFunction = (email , password) => {
        console.log('signupFunction is called');
        console.log(email);
        console.log(password);
        firebaseAuth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    let user = userCredential.user;
                    console.log(user);
                    })
                .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log({errorCode}, {errorMessage});
                })
            }
  return (
    <div className="signup-container">
    <h1>Sign Up</h1>
      <div className="input-boxes">
        <label htmlFor="email">Email:</label>
        <input onChange={(e)=> setEmail(e.target.value)} type="text" id="email" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password"></input>
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          onChange={(e) => setConfirmaPassword(e.target.value)}
        ></input>
      </div>
      <button  onClick={signupFunction}>Submit</button>
    </div>
  );
}
