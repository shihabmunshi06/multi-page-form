import Step from "../../components/Step"
import steps from "../../data/stepsData"

export default function Left() {
    return (
        <div className="left">
            <div className="steps">
                {
                    steps.map((e, index) => <Step key={index} stepName={e} stepNumber={index + 1} />)
                }
            </div>
        </div>
    )
}
