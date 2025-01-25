import React from "react";
import Table from "./Table";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    columns: { control: "array" },
    data: { control: "array" },
  },
  tags: ["autodocs"],
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ["Name", "Age", "Location"],
  data: [
    { Name: "John Doe", Age: 30, Location: "New York" },
    { Name: "Jane Smith", Age: 25, Location: "San Francisco" },
    { Name: "Sam Brown", Age: 28, Location: "Chicago" },
  ],
};
