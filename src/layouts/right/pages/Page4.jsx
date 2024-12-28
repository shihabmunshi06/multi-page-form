import FormTop from '../../../components/FormTop'

import { Link } from 'react-router';
import { useSelector } from "react-redux"



export default function Page4() {
    const totalCost = useSelector(state => state.cost.cost)
    const addOns = useSelector(state => state.allInfo.addOns)
    const { mode, duration, planCost } = useSelector(state => state.allInfo.selectedPlan)

    const formHero = {
        main: "Finising up",
        sub: "Double check everything looks Ok before confirming."
    };

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("success")
    }

    const handleEditPlan = (e) => {
        e.preventDefault()
    }


    const DetailCard = ({ data }) => {
        const { addOnsName, price } = data
        return (
            <div className="detail-card">
                <h3>{addOnsName}</h3>
                <h4>${price}{duration === "monthly" ? "/mo" : "/yr"}</h4>
            </div>
        )
    }

    return (
        <>
            <form className='confirm-form' onSubmit={onSubmit}>
                <fieldset>
                    <FormTop data={formHero} />
                    <div className="finishing-up-wrapper">
                        <div className="input-wrapper">
                            <div className="left-part">
                                <h2>{mode} {duration}</h2>
                                <p className='inside-button' onClick={handleEditPlan}>Change</p>
                            </div>
                            <p className="money">{planCost}</p>
                        </div>
                    </div>
                </fieldset>
                <div className="bottom-part">

                    {addOns.map((e, index) => {
                        return <DetailCard key={index} data={e} />
                    })}

                    <div className="detail-card total">
                        <h3>Total</h3>
                        <h4>${totalCost}{duration === "monthly" ? "/mo" : "/yr"}</h4>
                    </div>
                </div>

                <Link to="/add-ons" className="go-back">go back</Link>
                <button type="submit">confirm</button>
            </form>

        </>
    )
}
