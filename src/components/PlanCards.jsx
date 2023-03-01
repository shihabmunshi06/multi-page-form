import React from 'react'

import planCardsData from '../data/planCardsData'

export default function PlanCards({ selectPlan }) {
    return (
        <div className="cards">
            {planCardsData.map(each => {
                return (
                    <div className={`card ${selectPlan.duration === "yearly" ? "yearly-card" : ""}`} key={each.planType}>

                        <div className="image-wrapper">
                            <img src={each.image} alt="icon" />
                        </div>

                        <div>
                            <h2>{each.planType}</h2>

                            {selectPlan.duration === "monthly" ?
                                <h3>{each.mo}</h3>
                                :
                                <>
                                    <h3>{each.yr}</h3>
                                    <h4>2 months free</h4>
                                </>
                            }
                        </div>

                    </div>
                )
            })}

        </div>

    )
}
