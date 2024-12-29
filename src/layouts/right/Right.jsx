import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import { Routes, Route } from "react-router";

export default function Right() {

    return (
        <div className="right">
            <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/select-plan" element={<Page2 />} />
                <Route path="/add-ons" element={<Page3 />} />
                <Route path="/summary" element={<Page4 />} />
                <Route path="/thank-you" element={<Page5 />} />
            </Routes>
        </div>
    );

}
