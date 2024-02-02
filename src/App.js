import Button from "./components/Button";
import AccordionPage from "./pages/AccordionPage";
import CouterPage from "./pages/CouterPage";
import { GoCheckCircle } from "react-icons/go";
import DropdownPage from "./pages/DropdownPage";

function App () {
    const initialCount = 10;

    return (
        <div className="mt-10 mx-10">
            {/* <AccordionPage /> */}
            {/* <CouterPage initialCount={initialCount} /> */}
            {/* <div>
                <Button primary>Click me</Button> : primary
            </div>
            <div className="mt-2">
                <Button secondary>Click me</Button> : secondary
            </div>
            <div className="mt-2">
                <Button soft>Click me</Button> : soft
            </div>
            <div className="mt-2">
                <Button primary icon={<GoCheckCircle />}>Click me</Button> : primary + custom icon
            </div>

            <div className="mt-2">
                <Button primary rounded>Click me</Button> : primary + rounded
            </div> */}
            <DropdownPage />
        </div>
    )
}

export default App;