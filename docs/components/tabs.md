# Tabs

The **Tabs** component is a wrapper for Material-UI's `Tabs` and `Tab` that provides an easy way to implement tab navigation in your application.

This component wraps Material-UI’s `Tabs` and `Tab`, enabling you to create a tabbed interface where each tab corresponds to different content.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { Tabs } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
"dependencies": {
  "components": "1.0.0"
}
```

## Usage

### Example

Here’s a simple example of using the `Tabs` wrapper:

```jsx
import { useState } from "react";
import { Tabs, Tab } from "components";

function MyApp() {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "Tab 1", value: 0 },
    { label: "Tab 2", value: 1 },
    { label: "Tab 3", value: 2 },
  ];

  return (
    <div>
      <Tabs value={value} onChange={handleTabChange} tabs={tabs} />
      <div>
        {value === 0 && <div>Content for Tab 1</div>}
        {value === 1 && <div>Content for Tab 2</div>}
        {value === 2 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
}

export default MyApp;
```

### Component API

#### Props

- **`value`**: _(required)_ A number that represents the currently selected tab's value.
- **`onChange`**: _(required)_ A function that will be triggered when the tab is changed. It receives the event and the new tab's value as arguments.
- **`tabs`**: _(required)_ An array of objects representing the tabs. Each object should have:
  - **`label`**: The text label for the tab.
  - **`value`**: A unique number representing the tab's value.
- **`props`**: Any other props passed to the `Tabs` will be forwarded to the Material-UI `Tabs` component.

#### Example with Dynamic Content

```jsx
import { useState } from "react";
import { Tabs } from "components";

function MyApp() {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "Home", value: 0 },
    { label: "Profile", value: 1 },
    { label: "Settings", value: 2 },
  ];

  return (
    <div>
      <Tabs value={value} onChange={handleTabChange} tabs={tabs} />
      <div>
        {value === 0 && <div>Welcome to the Home Tab</div>}
        {value === 1 && <div>Profile Settings</div>}
        {value === 2 && <div>Manage Settings</div>}
      </div>
    </div>
  );
}

export default MyApp;
```

In this example, content for each tab is dynamically rendered based on the selected tab.

## Notes

- **Tab Value**: The `value` prop should match the `value` of one of the tabs to highlight the active tab.
- **Tabs Prop**: The `tabs` prop is required to define the tabs. It should be an array of objects where each object contains a `label` (the text for the tab) and a `value` (the unique number for each tab).
- **Custom Props**: You can pass any additional props to customize the Material-UI `Tabs` component further.

---

For more details, check out the [Material-UI Tabs documentation](https://mui.com/material-ui/react-tabs/).
