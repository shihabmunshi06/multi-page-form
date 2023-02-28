import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PersonalInfo() {

    const formRef = useRef()
    const navigate = useNavigate()

    function handleClick() {
        formRef.current.classList.add("clicked")
    }

    function handleSubmit(e) {
        e.preventDefault()
        formRef.current.classList.remove("clicked")
        navigate("/plan")
    }

    return (
        <div className="personal-info">

            <div className="top">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} >

                <div className='input-wrapper'>
                    <label htmlFor="name">Name</label>
                    <input name='name' placeholder='e.g Stephen King' required />
                </div>


                <div className='input-wrapper'>
                    <label htmlFor="email">Email Address</label>
                    <input name='email' placeholder='e.g stephen@lorem.com' type="email" required />
                </div>

                <div className='input-wrapper'>
                    <label htmlFor="number">Phone Number</label>
                    <input name='number' placeholder='e.g +1 234 567 890' type="number" required />
                </div>
                <div className='buttons'>
                    <button className='next' onClick={handleClick} type='submit'>
                        Next Step
                    </button>
                </div>
            </form>
        </div>
    )
}
