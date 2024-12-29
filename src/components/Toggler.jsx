import { useDispatch, useSelector } from "react-redux";

import { setDuration } from "../app/allInfoSlice";

export default function Toggler() {
    const dispatch = useDispatch()
    const { duration } = useSelector(state => state.allInfo.selectedPlan)

    function handleToggle(e) {
        dispatch(setDuration(e.target.value))
    }
    return (
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
    )
}
