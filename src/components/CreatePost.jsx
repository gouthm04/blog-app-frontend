import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const CreatePost = () => {
    const [input, setInput] = useState({
        "Message": "", 
        "userId": sessionStorage.getItem("userId")
    })

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        console.log(input)
        
        axios.post("http://localhost:3000/create", input, {
            headers: {
                "token": sessionStorage.getItem("token"), 
                "Content-Type": "application/json"
            }
        }).then(
            (response) => {
                console.log(response.data)
                if (response.data.status === "Success") {
                    alert("Post created successfully!")
                    setInput({ ...input, "Message": "" })
                } else {
                    alert("Error creating post.")
                }
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Something went wrong.")
            }
        )
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Create Post</h3>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="messageInput" className="form-label text-muted">Post a Message</label>
                                        <textarea id="messageInput" name="Message" className="form-control bg-light" rows="5" value={input.Message} onChange={inputHandler} placeholder="What's on your mind?"></textarea>
                                    </div>
                                    <div className="col-12 text-end">
                                        <button className="btn btn-success px-4" onClick={readValues}>Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
