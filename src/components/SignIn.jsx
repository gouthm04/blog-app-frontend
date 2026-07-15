import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const readValues = (e) => {
        e.preventDefault()
        console.log(input)
        
        axios.post("http://localhost:3000/signin", input).then(
            (response) => {
                console.log(response.data)
                
                if (response.data.status === "Incorrect Password") {
                    alert("Incorrect Password")
                } else if (response.data.status === "Invalid Email Id") {
                    alert("Invalid Email Id")
                } else {
                    let token = response.data.token
                    let userId = response.data.userId
                    
                    console.log(userId)
                    console.log(token)
                    
                    sessionStorage.setItem("userId", userId)
                    sessionStorage.setItem("token", token)
                    
                    navigate("/create")
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Sign In</h3>
                                <form className="row g-3" onSubmit={readValues}>
                                    <div className="col-12">
                                        <label htmlFor="emailInput" className="form-label">Email ID</label>
                                        <input type="email" id="emailInput" className="form-control" placeholder="Enter your email ID" name="email" value={input.email} onChange={inputHandler} required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="passwordInput" className="form-label">Password</label>
                                        <input type="password" id="passwordInput" className="form-control" placeholder="Enter your password" name="password" value={input.password} onChange={inputHandler} required />
                                    </div>
                                    <div className="col-12 d-flex justify-content-between mt-4">
                                        <button type="submit" className="btn btn-success px-4">Log in</button>
                                        <Link to="/signup" className="btn btn-outline-primary px-4">New Users Click Here</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
