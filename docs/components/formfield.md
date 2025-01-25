# FormField

The **FormField** component is a wrapper for Material-UI's `TextField` that simplifies the process of creating form fields with consistent styling and behavior.

This component wraps Material-UI’s `TextField` and provides customizable options such as the label, variant, and width, making it easy to integrate into your forms.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { FormField } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
"dependencies": {
  "components": "1.0.0"
}
```

## Usage

### Example

Here’s a simple example of using the `FormField` wrapper:

```jsx
import { FormField } from "components";

function MyApp() {
  return (
    <FormField
      label="Your Name"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}

export default MyApp;
```

### Component API

#### Props

- **`label`**: _(required)_ The label to be displayed inside the text field.
- **`variant`**: _(optional)_ The style of the text field. Can be one of:

  - `"outlined"`: A text field with an outlined border.
  - `"filled"`: A text field with a filled background.
  - `"standard"`: A text field with a standard underline.

  Defaults to `"outlined"`.

- **`fullWidth`**: _(optional)_ A boolean to control whether the text field should take up the full width of its container. Defaults to `true`.
- **`props`**: Any other props passed to the `FormField` will be forwarded to the Material-UI `TextField` component.

#### Example with Custom Variants

```jsx
import { FormField } from "components";

function MyApp() {
  return (
    <div>
      <FormField label="Email Address" variant="filled" />
      <FormField label="Phone Number" variant="standard" />
    </div>
  );
}

export default MyApp;
```

In this example, there are two `FormField` components, each with different variants: `filled` and `standard`.

## Notes

- **Label**: The `label` prop is required to provide the label text inside the form field.
- **Variant**: The `variant` prop determines the style of the input field. It can be customized based on your design requirements.
- **Full Width**: The `fullWidth` prop controls whether the text field spans the entire width of the container. You can set it to `false` if you need a smaller field.
- **Custom Props**: You can pass any additional props, such as `onChange`, `value`, `helperText`, and more, to the underlying Material-UI `TextField`.

---

For more details, check out the [Material-UI TextField documentation](https://mui.com/material-ui/react-text-field/).
