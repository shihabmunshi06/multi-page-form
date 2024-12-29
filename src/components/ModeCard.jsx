import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';

import { addSelectPlan } from "../app/allInfoSlice";

const ModeCard = ({ data }) => {
    const dispatch = useDispatch()

    const { modeName, img, ariaMsgMonthly, ariaMsgYearly, monthlyCost, yearlyCost } = data

    const { mode, duration } = useSelector(state => state.allInfo.selectedPlan)

    const handleSelect = (e) => {
        dispatch(addSelectPlan(
            {
                mode: e.target.value,
                monthlyMoney: monthlyCost,
                yearlyMoney: yearlyCost,
                duration
            }
        ))
    };

    let costText = ""
    let ariamsg = ""

    if (duration === "monthly") {
        costText = "$" + monthlyCost + "/mo"
        ariamsg = ariaMsgMonthly
    } else {
        costText = "$" + yearlyCost + "/yr"
        ariamsg = ariaMsgYearly
    }

    const inputref = useRef()

    return (
        <div
            className={`input-wrapper ${mode === modeName ? "selected" : ""} ${duration === "yearly" ? "yearly" : ""}`}
            role="radio"
        >
            <div className="card-img-div">
                <img src={img} alt="card label" />
            </div>

            <input
                id={modeName}
                type="radio"
                name="plan"
                value={modeName}
                onChange={handleSelect}
                checked={mode === modeName}
                aria-label={ariamsg}
                ref={inputref}
            />

            <label htmlFor="advance">
                <h3>{modeName}</h3>
                <p>{costText}</p>
                {
                    duration === "yearly" && <p className="offer">2 month free</p>
                }
            </label>
        </div>
    )
}

ModeCard.propTypes = {
    data: PropTypes.shape({
        modeName: PropTypes.string,
        img: PropTypes.string,
        ariaMsgMonthly: PropTypes.string,
        ariaMsgYearly: PropTypes.string,
        monthlyCost: PropTypes.number,
        yearlyCost: PropTypes.number,
    }),
};

export default ModeCard