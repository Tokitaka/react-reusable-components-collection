import { useEffect, useRef, useState } from "react";

function Dropdown({options, value, onChange}){
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();
    
    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current) {
                return;
            }

            if(!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    const renderedOptions = options.map((option, index) => {
        return (
            <div key={index} 
                className="flex items-center" 
                onClick={() => {handleOptionClick(option)}}>
                {option.label}
                {option.icon}
            </div>
        );
    });

    return (
        <div ref={divEl}>
            <div onClick={handleClick}>
            {value?.label || 'Select your SNS'} 
            </div>
            {isOpen && renderedOptions}
        </div>
    );
}

export default Dropdown;