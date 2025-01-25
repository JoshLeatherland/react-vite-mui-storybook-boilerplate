# Dialog

The **Dialog** component is a wrapper for Material-UI's `Dialog` that provides an easy way to create modal dialogs with a title, content, and actions. It integrates with the `Button` component for consistent interaction.

This component wraps Material-UI’s `Dialog`, `DialogActions`, `DialogContent`, and `DialogTitle`, with built-in support for opening, closing, and displaying content.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { Dialog } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
"dependencies": {
  "components": "1.0.0"
}
```

## Usage

### Example

Here’s a simple example of using the `Dialog` wrapper:

```jsx
import { useState } from "react";
import { Dialog, Button } from "components";

function MyApp() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Dialog</Button>
      <Dialog open={open} onClose={handleClose} title="My Dialog">
        <p>This is the content of the dialog.</p>
      </Dialog>
    </div>
  );
}

export default MyApp;
```

### Component API

#### Props

- **`open`**: _(required)_ A boolean that controls whether the dialog is open or closed.
- **`onClose`**: _(required)_ A function that will be triggered when the dialog is closed (e.g., by clicking the backdrop or the Close button).
- **`title`**: _(required)_ The title of the dialog, displayed at the top.
- **`children`**: _(required)_ The content to be displayed inside the dialog.
- **`props`**: Any other props passed to the `Dialog` will be forwarded to the Material-UI `Dialog` component.

#### Example with Custom Content

```jsx
import { useState } from "react";
import { Dialog, Button } from "components";

function MyApp() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Dialog</Button>
      <Dialog open={open} onClose={handleClose} title="Custom Dialog">
        <p>This is some custom content inside the dialog.</p>
      </Dialog>
    </div>
  );
}

export default MyApp;
```

In this example, the dialog contains custom content and a **Close** button.

## Notes

- **Open**: The `open` prop is required to control the visibility of the dialog.
- **Close Functionality**: The `onClose` prop is needed to handle the closing of the dialog. Typically, it is used to change the state controlling the `open` prop.
- **Title**: The `title` prop is required to display the dialog’s header.
- **Children**: The `children` prop allows you to pass any content that will be displayed inside the dialog.

---

For more details, check out the [Material-UI Dialog documentation](https://mui.com/material-ui/react-dialog/).
