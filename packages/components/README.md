# Components

These components are importing from MUI but exporting as a wrapper, allowing you to control the interface of the component from a single source.

You can import any component with a named reference:

```js
import { Button, TextField } from "components";
```

If you've made a new project inside this workspace, ensure your `package.json` is importing this project.

```json
 "dependencies": {
    "components": "0.0.0",
  },
```

`components`: name of this component libary project.
`version`: version from the `package.json` for this project.
