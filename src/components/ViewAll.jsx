import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/viewall", {}, {
            headers: { "token": sessionStorage.getItem("token"), "Content-Type": "application/json" }
        }).then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error) => { console.log(error) }
        )
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h3 className="text-center mb-4">All Posts</h3>
                <div className="row g-4 justify-content-center">
                    {
                        data.map(
                            (value, index) => {
                                return (
                                    <div className="col-12 col-md-8 col-lg-6" key={index}>
                                        <div className="card shadow-sm border-0">
                                            <div className="card-body">
                                                <h6 className="card-subtitle mb-2 text-primary">
                                                    Author: {value.userId?.name || value.userId}
                                                </h6>
                                                <p className="card-text fs-5">{value.Message}</p>
                                            </div>
                                            <div className="card-footer bg-transparent border-0 text-end">
                                                <small className="text-muted">Posted: {new Date(value.postedDate).toLocaleString()}</small>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewAll
