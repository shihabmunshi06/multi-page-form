import { Link, useNavigate } from "react-router";

import ModeCard from "../../../components/ModeCard";
import Toggler from "../../../components/Toggler";
import modesData from "../../../data/modesData";
import FormTop from "../../../components/FormTop";

export default function Page2() {
  const formHero = {
    main: "Select your plan",
    sub: "You have the option of monthly or yearly billing."
  };

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    navigate("/add-ons");
  }

  return (
    <form onSubmit={onSubmit} aria-labelledby="form-title" noValidate role="form">
      <fieldset>
        <FormTop data={formHero} />

        <div
          className="card-wrapper" role="radiogroup">
          {modesData.map((each, index) => {
            return (
              <ModeCard key={index} data={each} />
            )
          })}
        </div>
      </fieldset>

      <Toggler />

      <Link to="/" className="go-back">go back</Link>
      <button type="submit">next step</button>
    </form>
  );
}
