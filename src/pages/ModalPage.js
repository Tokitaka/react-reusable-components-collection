import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const content = {
        title: 'Become an e-⁠resident', 
        body: 'Apply for e-⁠Residency, pick up your e-⁠Residency kit and use it to start, run and grow a company 100% online. E-Residency of Estonia is a government-issued digital identity.',
    }

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} soft rounded>Apply now!</Button>
        </div>
    );

    const modal = (
        <Modal content={content} actionBar={actionBar} onClose={handleClose} />
    );

    return (
    <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
    </div>
    )
}

export default ModalPage;