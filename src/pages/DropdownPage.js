import Dropdown from "../components/Dropdown";
import { useState } from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        {label: 'Facebook', icon: <FaFacebook />, value: 'facebook'},
        {label: 'Instagram', icon: <FaInstagram />, value: 'instagram'},
        {label: 'X', icon: <FaSquareXTwitter />, value: 'x'},
        {label: 'Reddit', icon: <FaReddit />, value: 'reddit'},
        {label: 'LinkedIn', icon: <FaLinkedin />, value: 'linkedin'},
    ];

    return (
        <Dropdown options={options} value={selection} onChange={handleSelect} />
    )
}

export default DropdownPage;