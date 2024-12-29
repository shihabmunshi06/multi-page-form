import { Link, useNavigate } from 'react-router';
import { useSelector } from "react-redux"
import PropTypes from 'prop-types';

import FormTop from '../../../components/FormTop'

export default function Page4() {
    const navigate = useNavigate()
    const addOnsCost = useSelector(state => state.cost.cost)
    const addOns = useSelector(state => state.allInfo.addOns)
    const { mode, duration, monthlyMoney, yearlyMoney } = useSelector(state => state.allInfo.selectedPlan)

    const formHero = {
        main: "Finising up",
        sub: "Double check everything looks Ok before confirming."
    };

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("success")
        navigate("/thank-you")
    }


    const DetailCard = ({ data }) => {
        const { addOnsName, price } = data
        return (
            <div className="detail-card">
                <h3>{addOnsName.replace("-", " ")}</h3>
                <h4>+${price}{duration === "monthly" ? "/mo" : "/yr"}</h4>
            </div>
        )
    }
    DetailCard.propTypes = {
        data: PropTypes.shape({
            addOnsName: PropTypes.string,
            price: PropTypes.number,
        })
    };

    let modeCost = ""
    let costText = ""
    if (duration === "monthly") {
        modeCost = monthlyMoney
        costText = "/mo"
    } else {
        modeCost = yearlyMoney
        costText = "/yr"
    }
    return (
        <>
            <form className='confirm-form' onSubmit={onSubmit}>
                <fieldset>
                    <FormTop data={formHero} />
                    <div className="finishing-up-wrapper">
                        <div className="input-wrapper">
                            <div className="left-part">
                                <h2>{mode} ({duration})</h2>
                                <Link to="/select-plan" className='inside-button'>Change</Link>
                            </div>
                            <p className="money">
                                ${modeCost}{costText}
                            </p>
                        </div>
                    </div>
                </fieldset>
                <div className="bottom-part">

                    {addOns.map((e, index) => {
                        return <DetailCard key={index} data={e} />
                    })}

                    <div className="detail-card total">
                        <h3>Total {duration === "monthly" ? "(per month)" : "(per year)"}</h3>
                        <h4>${addOnsCost + modeCost}{costText}</h4>
                    </div>
                </div>

                <Link to="/add-ons" className="go-back">go back</Link>
                <button type="submit">confirm</button>
            </form>

        </>
    )
}
