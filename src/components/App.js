import SidenavCard from "./SidenavCard"

export default function App() {
  return (
    <div className='main-container flex'>
      <div className="left">
        <SidenavCard />
      </div>
      <div className="right">
        <div className="top">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number</p>
        </div>
        <div className="form">
          some other text
        </div>
      </div>
    </div>
  )
}

