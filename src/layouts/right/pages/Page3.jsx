import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";

import addOnsData from "../../../data/addOnsData";
import FormTop from "../../../components/FormTop";

import { addAddOns, removeAddOns } from "../../../app/allInfoSlice";
import { addCost, removeCost } from "../../../app/costSlice";


export default function Page3() {
    const formHero = {
        main: "Pick add-ons",
        sub: "Add-ons help enhance your gaming experience."
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const duration = useSelector(state => state.allInfo.selectedPlan.duration)
    const fetchedAddOns = useSelector(state => state.allInfo.addOns)

    const fetchedAddOnNames = fetchedAddOns.map(e => e.addOnsName)
    const [selectedAddOnNames, setSelectedAddOnNames] = useState(fetchedAddOnNames)

    const AddOnsCard = ({ data, serial }) => {
        const { className, title, desc, monthlyPrice, yearlyPrice } = data

        let price = ""
        let textAfterPrice = ""
        if (duration === "monthly") {
            price = monthlyPrice
            textAfterPrice = "/mo"
        } else {
            price = yearlyPrice
            textAfterPrice = "/yr"
        }

        return (
            <div
                className={`input-wrapper ${selectedAddOnNames.includes(className) ? "selected" : ""}`}
                role="checkbox"
                aria-checked={selectedAddOnNames.includes(className)}
                tabIndex={serial}

                onClick={() => handleWrapperClick(className, price)}
            >
                <input
                    readOnly
                    type="checkbox"
                    id={className}
                    checked={selectedAddOnNames.includes(className)}
                    aria-label={`Select ${title} - ${desc} for ${price}`}
                />
                <label htmlFor={className}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </label>
                <h4>${price}{textAfterPrice}</h4>
            </div>
        )
    }

    const handleWrapperClick = (addOnsName, price) => {
        const isPresent = selectedAddOnNames.includes(addOnsName)
        if (isPresent) {
            setSelectedAddOnNames(prev => {
                return prev.filter(e => e != addOnsName)
            })
            dispatch(removeAddOns(addOnsName))
            dispatch(removeCost(Number(price)))
        } else {
            setSelectedAddOnNames(prev => [...prev, addOnsName])
            dispatch(addAddOns({ addOnsName, price }))
            dispatch(addCost(Number(price)))
        }
    }

    const onsubmit = (e) => {
        e.preventDefault()
        navigate("/summary")
    }

    return (
        <form onSubmit={onsubmit}>
            <fieldset>
                <FormTop data={formHero} />

                <div className="add-ons-wrapper">
                    {addOnsData.map((each, index) => {
                        return <AddOnsCard
                            key={index}
                            data={each}
                            serial={index + 1} />
                    })}
                </div>
            </fieldset>
            <Link to="/select-plan" className="go-back">go back</Link>

            <button type="submit">next step</button>
        </form>

    )
}
