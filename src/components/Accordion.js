import { useState } from "react";
import { GoPlus, GoDash } from 'react-icons/go';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    
    const handleClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            if(currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });
    };
    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;
        const icons = (
            <span className="text-2xl">
                {isExpanded ? <GoDash /> : <GoPlus />}
            </span>
        );
        return(
            <div key={item.id} className="p-1.5 mb-3 bg-slate-100 rounded border-solid border-2 border-slate-400">
                <div
                    className="font-semibold justify-between p-3 flex flex-row items-center cursor-pointer" 
                    onClick={()=> handleClick(index)}>
                    {item.label}
                    {icons}
                </div>
                {isExpanded && <div className="px-3 pb-2">{item.content}</div>}
            </div>
        );
    });

    return(
        <div className="">
           {renderedItems}
        </div>
    )
}

export default Accordion;