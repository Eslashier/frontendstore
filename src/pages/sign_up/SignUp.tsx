import "../../components/forms.css"
import "../../App.css"
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../configuration/firebaseConfig";


const SignIn = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const signInForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (password && userName) {
            createUserWithEmailAndPassword(auth, userName, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("****user****");
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('*** sign in error ***');
                    console.log(errorMessage);
                });
            setUserName('')
            setPassword('')
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form className="form">
                <label >Username</label>
                <br />
                <input type="text" id="username" value={userName} placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
                <br />
                <label >Password</label>
                <input type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <button className='button3' onClick={(e) => signInForm(e)}>Sign up</button><br />
            </form>
        </div>
    )
}

export default SignIn
