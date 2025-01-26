# Typography

The **Typography** component is a wrapper for Material-UI's `Typography` that provides an easy way to render text with different styles and variants.

This component wraps Material-UI’s `Typography` component and allows you to easily control the text's style by specifying the variant you need.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { Typography } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
"dependencies": {
  "components": "1.0.0"
}
```

## Usage

### Example

Here’s a simple example of using the `Typography` wrapper:

```jsx
import { Typography } from "components";

function MyApp() {
  return <Typography variant="h4">This is a heading</Typography>;
}

export default MyApp;
```

### Component API

#### Props

- **`variant`**: _(optional)_ The typography variant to apply to the text. It can be one of the following:
  - `"h1"`, `"h2"`, `"h3"`, `"h4"`, `"h5"`, `"h6"`: Heading variants.
  - `"subtitle1"`, `"subtitle2"`: Subtitle variants.
  - `"body1"`, `"body2"`: Body text variants.
  - `"caption"`, `"overline"`, `"button"`, `"inherit"`: Other text styles (e.g., captions, overlines, or inherited styles).
- **`children`**: _(required)_ The text content to render inside the `Typography` component.
- **`props`**: Any other props passed to the `Text` will be forwarded to the Material-UI `Typography` component.

#### Example with Custom Variant

```jsx
import { Typography } from "components";

function MyApp() {
  return (
    <div>
      <Typography variant="h2">Main Title</Typography>
      <Typography variant="body1">
        This is a paragraph of body text, styled with the "body1" variant.
      </Typography>
    </div>
  );
}

export default MyApp;
```

In this example, different typography variants are used for the title and body text.

## Notes

- **Typography Variants**: The `variant` prop determines the style of the text. You can choose from a variety of predefined Material-UI typography styles.
- **Custom Content**: The `children` prop is required and represents the content to be displayed inside the `Typography` component.

---

For more details, check out the [Material-UI Typography documentation](https://mui.com/material-ui/react-typography/).
