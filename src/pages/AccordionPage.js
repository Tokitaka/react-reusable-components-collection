import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 1,
            label: 'Section 1',
            content: 'This is Accordion, Section 1',
        },
        {
            id: 2,
            label:'Section 2',
            content: 'This is Accordion, Section 2',
        },
        {
            id: 3,
            label:'Section 3',
            content: 'This is Accordion, Section 3',
        },
    ];
    return(
        <Accordion items={items} />
    )
}

export default AccordionPage;