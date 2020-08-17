import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { RegisterFormPath } from '../../constants/PathConstants'

function Home() {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <Link className="btn btn-primary register-btn" to={RegisterFormPath} >Register</Link>
        </div>
        </div>
    )
}

export default Home
