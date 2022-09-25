import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const App = (props) => {
    const data = { name: "", email: "", password: "" }
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)
    const [user, setUser] = useState(false)
    let navigate = useNavigate()
    useEffect(() => {
        console.log("Register")
    }, [flag])
    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })

    }
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("all fil are mendotary")
        } else {
            setFlag(true)
        }
        console.log(inputData)
        navigate('/showdata');

    }
  
    return (
        <>
            <div className="container  mt-5">
                <div className='row '>
                    <div className='col-3 '></div>
                    <div className='col-6 mt-5'>
                        <form onSubmit={handlesubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={inputData.name} onChange={handleData} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={inputData.email} onChange={handleData} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={inputData.password} onChange={handleData} id="password" />
                            </div>
                            <button type="submit" className="btn btn-primary" >Submit </button>
                        </form>
                    </div>
                    <div className='col-3'></div>
                </div>
            </div>

        </>
    )
}

export default App