# AppBar

The **AppBar** component is a wrapper for Material-UI's `AppBar` that provides an easy way to add a title and custom content to your app’s top navigation bar.

This component wraps Material-UI’s `AppBar` and `Toolbar`, with an optional title and custom children elements. You can use it as a flexible, reusable navigation bar for your application.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { AppBar, Button } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
 "dependencies": {
    "components": "1.0.0",
  },
```

## Usage

### Example

Here’s a simple example of using the `AppBar` wrapper:

```jsx
import { AppBar } from "components";

function MyApp() {
  return (
    <AppBar title="My Application">
      {/* Add additional elements or content inside the AppBar */}
    </AppBar>
  );
}

export default MyApp;
```

### Component API

#### Props

- **`title`**: _(optional)_ A string that will be displayed as the title within the `AppBar`. The `Typography` component is used for styling.
- **`children`**: _(optional)_ Custom child elements to be rendered next to the title in the `AppBar`.
- **`props`**: Any other props passed to the `AppBar` will be forwarded to the Material-UI `AppBar` component.

#### Example with Custom Content

```jsx
import { AppBar, Button } from "components";

function MyApp() {
  return (
    <AppBar title="My Application">
      <Button color="inherit">Login</Button>
    </AppBar>
  );
}

export default MyApp;
```

In this example, the **"Login"** button is added to the `AppBar` alongside the title.

## Notes

- **Title**: The `title` prop is optional. If it is not provided, the `AppBar` will simply render the children without any title.
- **Custom Content**: The `children` prop allows you to include any custom content inside the `AppBar` alongside the title.

---

For more details, check out the [Material-UI AppBar documentation](https://mui.com/material-ui/react-app-bar/).
