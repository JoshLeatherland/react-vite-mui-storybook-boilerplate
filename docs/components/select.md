# Select

The **Select** component is a wrapper for Material-UI's `Select` that provides an easy way to create dropdown select fields with custom labels and options.

This component wraps Material-UI’s `Select`, `MenuItem`, `FormControl`, and `InputLabel`, offering an easy-to-use interface for displaying select options in a form.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { Select } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
"dependencies": {
  "components": "1.0.0"
}
```

## Usage

### Example

Here’s a simple example of using the `Select` wrapper:

```jsx
import { useState } from "react";
import { Select } from "components";

function MyApp() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Select
      label="Select an Option"
      options={options}
      value={selectedOption}
      onChange={handleChange}
    />
  );
}

export default MyApp;
```

### Component API

#### Props

- **`label`**: _(required)_ The label to be displayed for the select field.
- **`options`**: _(required)_ An array of option objects where each object contains a `value` and `label` for the dropdown options.
  - Example: `{ value: "option1", label: "Option 1" }`
- **`value`**: _(required)_ The currently selected value in the dropdown.
- **`onChange`**: _(required)_ A function that is called when a new option is selected.
- **`props`**: Any other props passed to the `Select` will be forwarded to the Material-UI `Select` component.

#### Example with Custom Options

```jsx
import { useState } from "react";
import { Select } from "components";

function MyApp() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];

  return (
    <Select
      label="Select a Fruit"
      options={options}
      value={selectedOption}
      onChange={handleChange}
    />
  );
}

export default MyApp;
```

In this example, the `Select` component renders a dropdown menu of fruit options, and the selected option is stored in the `selectedOption` state.

## Notes

- **Label**: The `label` prop is required to display a label for the select dropdown.
- **Options**: The `options` prop must be an array of objects, where each object has a `value` (for the selection) and a `label` (for display).
- **Value**: The `value` prop represents the currently selected option.
- **OnChange**: The `onChange` handler must be implemented to update the selected value when the user selects a new option.

---

For more details, check out the [Material-UI Select documentation](https://mui.com/material-ui/react-select/).
