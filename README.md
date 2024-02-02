## Accordion
A stacked set of interactive headings built using React, Tailwind, React Icons.
![image](https://github.com/Tokitaka/react-reusable-components-collection/assets/110197274/0d98866c-d289-4a5d-b55b-8b08e472853f)

## Button Component with Tailwind CSS
This is a custom reusable button component designed with Tailwind CSS.

- Flexible Props: Customize the button's appearance with props like primary, secondary, rounded, soft, icon and rounded.
- React Icons Integration: Easily include icons from React Icons library to enhance button visuals.

### Props
children: React elements to be displayed inside the button.
primary: Apply primary color scheme to the button.
secondary: Apply secondary color scheme to the button.
soft : soft version of primary
rounded: Apply rounded corners to the button.
icon: React Icons tag to be displayed as an icon inside the button.
...rest: Additional props for custom styling and functionality.

### Usage
```jsx
import Button from './Button';

<Button primary rounded icon={<YourIconComponent />} onClick={handleClick}>Click me</Button>
```

<img src="https://github.com/Tokitaka/react-reusable-components-collection/assets/110197274/14e62bc2-2c53-4622-8877-6fded2c26e3c">

## Dropdown Component with Tailwind CSS
Dropdown Component allows users to select a single value from a list of options. It supports props such as label, icon, value, and onChange for customization. The dropdown dynamically renders options based on the selected value. It utilizes a ref object to control the dropdown DOM element and registers a document-level event listener to handle clicks outside the dropdown. This ensures that the dropdown closes when clicked outside.
<img src="https://github.com/Tokitaka/react-reusable-components-collection/assets/110197274/56310069-aba3-4d18-9bec-6593fc390109">
