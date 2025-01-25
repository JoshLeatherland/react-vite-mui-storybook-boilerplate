# Switch

The **Switch** component is a wrapper for Material-UI's `Switch` that provides an easy way to implement toggle switches in your application.

This component wraps Material-UI’s `Switch`, allowing you to easily create a controlled toggle input with customizable behavior.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { Switch } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
"dependencies": {
  "components": "1.0.0"
}
```

## Usage

### Example

Here’s a simple example of using the `Switch` wrapper:

```jsx
import { useState } from "react";
import { Switch } from "components";

function MyApp() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return <Switch checked={checked} onChange={handleChange} />;
}

export default MyApp;
```

### Component API

#### Props

- **`checked`**: _(required)_ A boolean that determines whether the switch is on (checked) or off (unchecked).
- **`onChange`**: _(required)_ A function that will be triggered when the switch is toggled. It receives the event as an argument.
- **`props`**: Any other props passed to the `Switch` will be forwarded to the Material-UI `Switch` component.

#### Example with Label

```jsx
import { useState } from "react";
import { Switch, FormControlLabel } from "components";

function MyApp() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label="Enable Feature"
    />
  );
}

export default MyApp;
```

In this example, a `FormControlLabel` is used to display a label alongside the switch.

## Notes

- **Checked State**: The `checked` prop is required to control the switch's state. Use it to determine whether the switch is on or off.
- **On Change Handler**: The `onChange` handler must be implemented to capture the user's interaction with the switch and update the state accordingly.

---

For more details, check out the [Material-UI Switch documentation](https://mui.com/material-ui/react-switch/).
