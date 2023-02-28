import React from 'react'

export default function PlanCard({ image, planType, mo, yr, moState }) {
    return (
        <div class="card">
            
            <div class="image-wrapper">
                <img src={image} alt="icon" />
            </div>

            <div>
                <h2>{planType}</h2>

                {moState ?
                    <h3>{mo}</h3>
                    :
                    <>
                        <h3>{yr}</h3>
                        <h4>2 months free</h4>
                    </>
                }
            </div>

        </div>
    )
}
