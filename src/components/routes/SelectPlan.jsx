import React, { useState } from 'react'
import PlanCard from '../PlanCard'

const cardsData = [
  {
    image: "./dist/images/icon-arcade.svg",
    planType: "Arcade",
    mo: "$9/mo",
    yr: "$90/yr"
  },
  {
    image: "./dist/images/icon-advanced.svg",
    planType: "Advanced",
    mo: "$12/mo",
    yr: "$120/yr"
  },
  {
    image: "./dist/images/icon-pro.svg",
    planType: "Pro",
    mo: "$15/mo",
    yr: "$150/yr"
  }
]

export default function SelectPlan() {
  let [moState, setMoState] = useState(true)

  function handleSubmit() {

  }
  function handleBack() {

  }

  function handleToggle() {
    setMoState(false)
  }

  return (
    <div className="select-plan">

      <div className="top">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <form onSubmit={handleSubmit} >

        <div class="cards-and-toggler-wrapper">

          <div className="cards">
            {cardsData.map(card => {
              return (
                <PlanCard moState={moState} {...card} />
              )
            })}
          </div>

          <div class="inputs">
            <input type="radio" name="plan" id="arcade" />
          </div>
        </div>

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
