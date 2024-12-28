import { NavLink, useLocation } from "react-router"

export default function Step({ stepName, stepNumber }) {
    const handleClick = (e) => {
        e.preventDefault()
    }
    return (
        <NavLink onClick={handleClick} to={stepName === "your-info" ? "/" : stepName} className={({ isActive }) => `step ${isActive ? "active" : ""}`}>
            <div className={"circle"}>
                <p>{stepNumber}</p>
            </div>
            <div className="texts">
                <h2>step {stepNumber}</h2>
                <h3>{stepName != "add-ons" ? stepName.replace("-", " ") : stepName}</h3>
            </div>
        </NavLink>
    )
}
