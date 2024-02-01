import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 1,
            label: 'What do you mean by Accordion',
            content: 'An accordion is a musical instrument that belongs to the reed family, typically played by compressing or expanding a bellows while pressing buttons or keys to produce different pitches or notes. It is characterized by its distinctive sound, produced by air flowing over reeds inside the instrument when the bellows are operated. Accordions are used in various music genres, including folk, traditional, classical, and popular music, and they come in different sizes and types, including diatonic and chromatic accordions. Additionally, the term "accordion" can also refer to a folding musical instrument or file organizer with multiple sections that expand and contract, resembling the folding motion of the bellows on a traditional accordion.',
        },
        {
            id: 2,
            label:'What are the purpose of Accordion',
            content: 'Accordions serve several purposes across different contexts:Musical Instrument: The primary purpose of an accordion is as a musical instrument. It is used to produce melodies, harmonies, and rhythms in various genres of music, including folk, traditional, classical, and popular music. Accordions are versatile instruments capable of playing solo pieces, accompanying other musicians, or being part of larger ensembles.',
        },
        {
            id: 3,
            label:'How to get free source code of Accordion',
            content: 'To find free accordion source code. Search on GitHub or similar repositories. Look for repositories with "accordion widget" or "accordion component.". Review code and check the license',
        },
    ];
    return(
        <Accordion items={items} />
    )
}

export default AccordionPage;