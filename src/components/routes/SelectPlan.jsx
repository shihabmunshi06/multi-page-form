import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux"

import PlanCards from '../PlanCards'
import ModeInputs from "../ModeInputs"

import { addInfo } from "../../redux/actionMaker"

export default function SelectPlan() {
  let fetchedSelectPlan = useSelector(state => state.selectPlan)
  let [selectPlan, setSelectPlan] = useState(fetchedSelectPlan)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addInfo("selectPlan", selectPlan))
    navigate("/addon")
  }
  function handleBack() {
    navigate("/")
  }

  function handleToggle(e) {
    setSelectPlan(prev => {
      return {
        ...prev,
        duration: e.target.value
      }
    })
  }

  function handleModeChange(e) {
    setSelectPlan(prev => {
      return {
        ...prev,
        mode: e.target.value
      }
    })
  }

  return (
    <div className="select-plan">

      <div className="top">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <form onSubmit={handleSubmit} >

        <div className="cards-and-inputs-wrapper">
          <PlanCards selectPlan={selectPlan} />
          <ModeInputs selectPlan={selectPlan} handleChange={handleModeChange} />
        </div>

        <fieldset
          className="toggler"
          aria-label="monthly and yearly toggler"
          role="radiogroup"
        >
          <label className="monthly" htmlFor="monthly">
            Monthly
          </label>

          <div className="toggle-bg">

            <input onChange={handleToggle} checked={selectPlan.duration === "monthly"} type="radio" name="mo-yr" id="monthly" value="monthly" required />
            <input onChange={handleToggle} checked={selectPlan.duration === "yearly"} type="radio" name="mo-yr" id="yearly" value="yearly" />

            <div className="toggle-switch"></div>

          </div>

          <label className="yearly" htmlFor="yearly">
            Yearly
          </label>

        </fieldset>

        <div className='buttons'>
          <button onClick={handleBack} className='back' >
            Go Back
          </button>
          <button className='next' type='submit'>
            Next Step
          </button>
        </div>

      </form>
    </div>
  )
}
