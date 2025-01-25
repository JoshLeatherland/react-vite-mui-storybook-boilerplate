# Table

The **Table** component is a wrapper for Material-UI's `Table`, `TableBody`, `TableCell`, `TableContainer`, `TableHead`, `TableRow`, and `Paper` that provides an easy way to render tabular data.

This component wraps Material-UI's `Table` components, offering a flexible and customizable solution to display data in a structured table format.

## Importing

Each component in this boilerplate can be imported from the `components` project as a named reference.

### Example:

```jsx
import { Table } from "components";
```

Ensure your `package.json` references the `components` project and that the version matches.

```json
"dependencies": {
  "components": "1.0.0"
}
```

## Usage

### Example

Here’s a simple example of using the `Table` wrapper:

```jsx
import { Table } from "components";

function MyApp() {
  const columns = ["Name", "Age", "City"];
  const data = [
    { Name: "John", Age: 28, City: "New York" },
    { Name: "Jane", Age: 22, City: "London" },
    { Name: "Mike", Age: 32, City: "Sydney" },
  ];

  return <Table columns={columns} data={data} />;
}

export default MyApp;
```

### Component API

#### Props

- **`columns`**: _(required)_ An array of strings representing the column headers for the table.
  - Example: `["Name", "Age", "City"]`
- **`data`**: _(required)_ An array of objects where each object represents a row in the table, and each key corresponds to a column in the `columns` array.
  - Example: `{ Name: "John", Age: 28, City: "New York" }`
- **`props`**: Any other props passed to the `Table` will be forwarded to the Material-UI `Table` component.

#### Example with Custom Data

```jsx
import { Table } from "components";

function MyApp() {
  const columns = ["Product", "Price", "Quantity"];
  const data = [
    { Product: "Apple", Price: "$1", Quantity: 5 },
    { Product: "Banana", Price: "$0.5", Quantity: 8 },
    { Product: "Orange", Price: "$0.8", Quantity: 10 },
  ];

  return <Table columns={columns} data={data} />;
}

export default MyApp;
```

In this example, the table displays a list of products with their price and quantity.

## Notes

- **Columns**: The `columns` prop is required to define the table headers. It should be an array of strings.
- **Data**: The `data` prop is required to define the rows in the table. It should be an array of objects, where each object represents a row, and the keys should correspond to the columns.
- **Customization**: You can pass any additional props to further customize the Material-UI `Table` component.

---

For more details, check out the [Material-UI Table documentation](https://mui.com/material-ui/react-table/).
