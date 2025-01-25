# Modal

The **Modal** component is a wrapper for Material-UI's `Modal` that simplifies the process of creating modal dialogs. It includes customizable behavior for opening, closing, and rendering content.

This component wraps Material-UI’s `Modal` and `Box`, providing an easy way to show content in a modal window with padding and a white background.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { Modal } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
"dependencies": {
  "components": "1.0.0"
}
```

## Usage

### Example

Here’s a simple example of using the `Modal` wrapper:

```jsx
import { useState } from "react";
import { Modal, Button } from "components";

function MyApp() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <h2>Modal Content</h2>
        <p>This is the content inside the modal window.</p>
      </Modal>
    </div>
  );
}

export default MyApp;
```

### Component API

#### Props

- **`open`**: _(required)_ A boolean that controls whether the modal is open or closed.
- **`onClose`**: _(required)_ A function that will be triggered when the modal is closed (e.g., by clicking the backdrop or the Close button).
- **`children`**: _(required)_ The content to be displayed inside the modal.
- **`props`**: Any other props passed to the `Modal` will be forwarded to the Material-UI `Modal` component.

#### Example with Custom Content

```jsx
import { useState } from "react";
import { Modal, Button } from "components";

function MyApp() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <div>
          <h2>Custom Modal Content</h2>
          <p>Here is some custom content inside the modal.</p>
        </div>
      </Modal>
    </div>
  );
}

export default MyApp;
```

In this example, the modal displays custom content when it is opened.

## Notes

- **Open**: The `open` prop is required to control the visibility of the modal.
- **Close Functionality**: The `onClose` prop is required to handle closing the modal. Typically, this function will change the state controlling the `open` prop.
- **Children**: The `children` prop allows you to pass any content that will be displayed inside the modal.

---

For more details, check out the [Material-UI Modal documentation](https://mui.com/material-ui/react-modal/).
