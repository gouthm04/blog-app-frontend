import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
    const [input, setInput] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const [errorMsg, setErrorMsg] = useState("")

    const inputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const readValues = (e) => {
        e.preventDefault()
        console.log(input)
        setErrorMsg("") // Reset error message before making the call
        
        if (input.password === input.confirmPassword) {
            let newInput = {
                name: input.name,
                phone: input.phone,
                email: input.email,
                password: input.password
            }

            // API call to localhost:3000/signup
            axios.post("http://localhost:3000/signup", newInput)
                .then(
                    (response) => {
                        console.log(response.data)
                        // Show success alert
                        alert("Registration successful!")
                        // Clear the input fields
                        setInput({
                            name: "",
                            phone: "",
                            email: "",
                            password: "",
                            confirmPassword: ""
                        })
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                        // Show simple error message
                        setErrorMsg("An error occurred during registration. Please try again.")
                    }
                )
        } else {
            setErrorMsg("Passwords do not match!")
        }
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Sign Up</h3>
                                
                                {errorMsg && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMsg}
                                    </div>
                                )}
                                
                                <form className="row g-3" onSubmit={readValues}>
                                    <div className="col-12 col-sm-6">
                                        <label htmlFor="nameInput" className="form-label">Name</label>
                                        <input type="text" id="nameInput" className="form-control" placeholder="Enter your name" name="name" value={input.name} onChange={inputHandler} required />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label htmlFor="phoneInput" className="form-label">Phone</label>
                                        <input type="text" id="phoneInput" className="form-control" placeholder="Enter your phone number" name="phone" value={input.phone} onChange={inputHandler} required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="emailInput" className="form-label">Email ID</label>
                                        <input type="email" id="emailInput" className="form-control" placeholder="Enter your email ID" name="email" value={input.email} onChange={inputHandler} required />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label htmlFor="passwordInput" className="form-label">Password</label>
                                        <input type="password" id="passwordInput" className="form-control" placeholder="Enter your password" name="password" value={input.password} onChange={inputHandler} required />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label htmlFor="confirmPasswordInput" className="form-label">Confirm Password</label>
                                        <input type="password" id="confirmPasswordInput" className="form-control" placeholder="Confirm your password" name="confirmPassword" value={input.confirmPassword} onChange={inputHandler} required />
                                    </div>
                                    <div className="col-12 d-flex justify-content-between mt-4">
                                        <button type="submit" className="btn btn-success px-4">Register</button>
                                        <button type="button" className="btn btn-outline-primary px-4">Log in</button>
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

export default SignUp