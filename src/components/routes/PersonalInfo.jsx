import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

import { addInfo } from '../../redux/actionMaker';

export default function PersonalInfo() {
    let fetchedPersonalInfo = useSelector(state => state.personalInfo)
    let [personalInfo, setPersonalInfo] = useState(fetchedPersonalInfo)

    const formRef = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleChange(e) {
        let { name, value } = e.target
        setPersonalInfo((prev) => {
            return {
                ...prev,
                [name]: value
            }

        })
    }

    function handleClick() {
        formRef.current.classList.add("clicked")
    }

    function handleSubmit(e) {
        e.preventDefault()
        formRef.current.classList.remove("clicked")
        dispatch(addInfo("personalInfo", personalInfo))
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
                    <input name='name' placeholder='e.g Stephen King' value={personalInfo.name} onChange={handleChange} required />
                </div>


                <div className='input-wrapper'>
                    <label htmlFor="email">Email Address</label>
                    <input name='email' placeholder='e.g stephen@lorem.com' value={personalInfo.email} onChange={handleChange} type="email" required />
                </div>

                <div className='input-wrapper'>
                    <label htmlFor="number">Phone Number</label>
                    <input name='number' placeholder='e.g +1 234 567 890' value={personalInfo.number} onChange={handleChange} type="number" required />
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
