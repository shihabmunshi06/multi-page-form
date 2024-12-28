import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

import modesData from "../../../data/modesData";
import FormTop from "../../../components/FormTop";

import { addSelectPlan, resetAddOns } from "../../../app/allInfoSlice";


import { resetCost } from "../../../app/costSlice";

export default function Page2() {
  const formHero = {
    main: "Select your plan",
    sub: "You have the option of monthly or yearly billing."
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const initialMode = useSelector(state => state.allInfo.selectedPlan.mode)
  // const initialDuration = useSelector(state => state.allInfo.selectedPlan.duration)
  const { mode: initialMode, duration: initialDuration, planCost: initialPlanCost } = useSelector(state => state.allInfo.selectedPlan)

  const [mode, setMode] = useState(initialMode)
  const [duration, setDuration] = useState(initialDuration);
  let [planCost, setPlanCost] = useState(initialPlanCost)


  const ModeCard = ({ data }) => {
    const { modeName, img, ariaMsgMonthly, ariaMsgYearly, monthlyCost, yearlyCost } = data

    let moneyText = ""
    let ariamsg = ""

    if (duration === "monthly") {
      moneyText = monthlyCost
      ariamsg = ariaMsgMonthly
    } else {
      moneyText = yearlyCost
      ariamsg = ariaMsgYearly
    }

    return (
      <div
        className={`input-wrapper ${mode === modeName ? "selected" : ""}`}
        role="radio"
        style={{
          height: duration === "yearly" ? "19rem" : "16rem"
        }}
      >
        <div className="card-img-div">
          <img src={img} alt="card label" />
        </div>

        <input
          id={modeName}
          type="radio"
          name="plan"
          value={modeName}
          onChange={(e) => handleSelect(e, moneyText)}
          checked={mode === modeName}
          aria-label={ariamsg}
        />

        <label htmlFor="advance">
          <h3>{modeName}</h3>
          <p>{moneyText}</p>
          {
            duration === "yearly" && <p className="offer">2 month free</p>
          }
        </label>
      </div>
    )
  }

  const handleSelect = (e, moneyText) => {
    setMode(e.target.value);
    setPlanCost(moneyText)
    console.log(moneyText)
  };

  function handleToggle(e) {
    dispatch(resetAddOns())
    dispatch(resetCost())
    setDuration(e.target.value)
  }

  const onSubmit = (e) => {
    dispatch(addSelectPlan(
      {
        mode,
        duration,
        planCost
      }
    ))
    e.preventDefault()
    navigate("/add-ons");
  }

  return (
    <form onSubmit={onSubmit} aria-labelledby="form-title" noValidate role="form">
      <fieldset>
        <FormTop data={formHero} />

        <div
          className="card-wrapper" role="radiogroup">
          {modesData.map((each, index) => {
            return (
              <ModeCard key={index} data={each} />
            )
          })}

        </div>
      </fieldset>

      <fieldset
        className="toggler"
        aria-label="monthly and yearly toggler"
        role="radiogroup"
      >
        <label className="monthly" htmlFor="monthly">
          Monthly
        </label>
        <div className="toggle-bg">
          <input
            onChange={handleToggle}
            checked={duration === "monthly"}
            type="radio"
            name="toggler"
            id="monthly"
            value="monthly"
            aria-checked={duration === "monthly"}
          />
          <input
            onChange={handleToggle}
            checked={duration === "yearly"}
            type="radio"
            name="toggler"
            id="yearly"
            value="yearly"
            aria-checked={duration === "yearly"}
          />
          <div className="toggle-switch"></div>
        </div>
        <label className="yearly" htmlFor="yearly">
          Yearly
        </label>
      </fieldset >

      <Link to="/" className="go-back">go back</Link>
      <button type="submit">next step</button>
    </form>
  );
}
