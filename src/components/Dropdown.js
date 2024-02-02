import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GoChevronRight } from "react-icons/go";

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
                className="cursor-pointer flex justify-between items-center text-main-blue text-xl border-b-2 border-main-blue py-3.5" 
                onClick={() => {handleOptionClick(option)}}>
                <div className="flex items-center size-full">
                {option.label}
                <span className="ml-1">
                {option.icon}
                </span>
                </div>
                <div><GoChevronRight /></div>
            </div>
        );
    });

    return (
        <div ref={divEl}>
            <div className="w-28 bg-main-blue rounded text-white p-2 text-lg text-center" onClick={handleClick}>
            {value?.label || 
            <div className="flex items-center justify-around"><FiMenu /> MENU</div>} 
            </div>
            {isOpen && renderedOptions}
        </div>
    );
}

export default Dropdown;

