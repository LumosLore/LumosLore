import React, { useState } from 'react'
import './signup.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import firebase from './firebaseConfig';

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            if (user) {
                alert("Account Created Successfully")
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='wrapper'>
            <form>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" value={name} placeholder='Username' required onChange={(e) => setName(e.target.value)} />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="email" value={email} placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" value={password} placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forget">
                    <label><input type='checkbox' />Remember me</label>
                    <a href='#'>Forget Password?</a>
                </div>
                <button type='submit' onClick={submit}>Register</button>

                <div className="register-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Signup