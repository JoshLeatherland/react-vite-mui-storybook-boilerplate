# Button

The **Button** component is a wrapper for Material-UI's `Button` that allows you to easily customize its appearance, color, and behavior.

This component wraps Material-UI’s `Button`, with the ability to set the `variant`, `color`, and custom children elements. You can use it as a flexible, reusable button in your application.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { Button } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
"dependencies": {
  "components": "1.0.0"
}
```

## Usage

### Example

Here’s a simple example of using the `Button` wrapper:

```jsx
import { Button } from "components";

function MyApp() {
  return <Button onClick={() => alert("Button clicked!")}>Click Me</Button>;
}

export default MyApp;
```

### Component API

#### Props

- **`variant`**: _(optional)_ The style of the button. Can be one of the following:
  - `"text"`: A button without borders, usually used for links.
  - `"outlined"`: A button with an outlined border.
  - `"contained"`: A button with a filled background (default).
- **`color`**: _(optional)_ The color of the button. Can be one of:
  - `"default"`, `"inherit"`, `"primary"`, `"secondary"`, `"error"`, `"info"`, `"success"`, `"warning"`.
- **`children`**: _(required)_ The content to be rendered inside the button, usually text or an icon.
- **`props`**: Any other props passed to the `Button` will be forwarded to the Material-UI `Button` component.

#### Example with Custom Content

```jsx
import { Button } from "components";

function MyApp() {
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={() => alert("Clicked!")}
    >
      Secondary Button
    </Button>
  );
}

export default MyApp;
```

In this example, the **"Secondary Button"** uses the outlined style and a secondary color.

## Notes

- **Variant**: The `variant` prop is optional and defaults to `"contained"`. You can customize the button to be `outlined` or `text` for different use cases.
- **Color**: The `color` prop defines the visual appearance of the button (e.g., primary, secondary). The default value is `primary`.
- **Children**: The `children` prop allows you to pass custom content inside the button, such as text or icons.

---

For more details, check out the [Material-UI Button documentation](https://mui.com/material-ui/react-button/).
