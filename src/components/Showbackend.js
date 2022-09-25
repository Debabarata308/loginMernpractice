import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'

const Showbackend = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        const name = async () => {
            try {
                const res = await Axios.get("http://localhost:8000/info")
                console.log(res.data)
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        name()
    }, [])
    return (
        <>
            <div className='container-fluid bg-secondary  '>
                <div className='row pt-5 mt-5 success'>
                    <div className='col-3 '></div>
                    <div className='row mt-5'>
                        <div className='col-xl-3 col-lg-3 col-md-3 col-sm-0 col-xs-0'></div>
                        <div className='col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 alightLeft'>
                            {
                                user ? user.map(e => {
                                    return (
                                        <div className="card d-inline-flex m-2">
                                            <div className="card-body">
                                                <div className='row d-block'>
                                                    <div className='col mt-2'>
                                                        <div className='row'>
                                                            <div className='col'>
                                                                <h5 className="card-title">{e.name}</h5>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col text-left'>
                                                                <p className='mt-2 mb-0'> {e.email}</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : "nodata"
                            }
                        </div>
                    </div>



                    <div className='col-3 '></div>
                </div>
            </div>
        </>
    )
}

export default Showbackend