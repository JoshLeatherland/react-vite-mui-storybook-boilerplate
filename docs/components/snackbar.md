# Snackbar

The **Snackbar** component is a wrapper for Material-UI's `Snackbar` and `SnackbarContent` that provides a simple way to show brief messages to users.

This component wraps Material-UI’s `Snackbar` and `SnackbarContent`, displaying a message in a small popup at the bottom of the screen that auto-hides after a short duration.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { Snackbar } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
"dependencies": {
  "components": "1.0.0"
}
```

## Usage

### Example

Here’s a simple example of using the `Snackbar` wrapper:

```jsx
import { useState } from "react";
import { Snackbar, Button } from "components";

function MyApp() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Show Snackbar</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="This is a message!"
      />
    </div>
  );
}

export default MyApp;
```

### Component API

#### Props

- **`open`**: _(required)_ A boolean that controls whether the snackbar is open or closed.
- **`onClose`**: _(required)_ A function that will be triggered when the snackbar is closed (e.g., by auto-hiding or user interaction).
- **`message`**: _(required)_ The message to be displayed inside the snackbar.
- **`props`**: Any other props passed to the `Snackbar` will be forwarded to the Material-UI `Snackbar` component.

#### Example with Custom Duration

```jsx
import { useState } from "react";
import { Snackbar, Button } from "components";

function MyApp() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Show Snackbar</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="This message will auto-hide after 5 seconds!"
        autoHideDuration={5000}
      />
    </div>
  );
}

export default MyApp;
```

In this example, the snackbar auto-hides after 5 seconds.

## Notes

- **Auto Hide**: By default, the snackbar will automatically hide after 3000 milliseconds (3 seconds). You can customize this duration by passing the `autoHideDuration` prop.
- **Message**: The `message` prop is required to specify the text content to display in the snackbar.
- **Custom Props**: You can pass any additional props, such as `anchorOrigin`, `ContentProps`, and more, to the underlying Material-UI `Snackbar`.

---

For more details, check out the [Material-UI Snackbar documentation](https://mui.com/material-ui/react-snackbar/).
