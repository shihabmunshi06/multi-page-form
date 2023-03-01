import React from 'react'
import planCardsData from '../data/planCardsData'

export default function ModeInputs({ selectPlan, handleChange }) {
    return (
        <fieldset
            className="mode-inputs"
            aria-label="plan mode selector"
            role="radiogroup">
            {planCardsData.map(each => {
                return (
                    <input
                        onChange={(e) => handleChange(e)}
                        type="radio"
                        name="plan"
                        id={each.planType}
                        value={each.planType}
                        key={each.planType}
                        className={selectPlan.duration === "yearly" ? "yearly-card" : ""}
                        required
                        checked={each.planType === selectPlan.mode}
                    />
                )
            })}
        </fieldset>
    )
}
