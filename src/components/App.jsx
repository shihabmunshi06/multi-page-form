import SideNav from "./Sidenav";
import PersonalInfo from "./routes/PersonalInfo";
import SelectPlan from "./routes/SelectPlan"
import AddOns from "./routes/AddOns"
import Summary from "./routes/Summary"

import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div className='main-container'>
      <SideNav />
      <div className="steps-container">
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/plan" element={< SelectPlan />} />
          <Route path="/addon" element={< AddOns />} />
          <Route path="/summary" element={< Summary />} />
        </Routes>
      </div>

    </div>
  )
}

