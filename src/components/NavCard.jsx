import React from 'react'
import { Link } from 'react-router-dom'

export default function NavCard({ number, details, path }) {
    return (
        <div className='nav-card'>
            <Link to={`/${path}`} className='number'>{number}</Link>
            <div className='details'>
                <p>Step {number}</p>
                <h2>{details}</h2>
            </div>
        </div>
    )
}
