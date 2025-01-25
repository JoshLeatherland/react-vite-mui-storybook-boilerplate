import React, { useState } from "react";
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    label: { control: "text" },
    options: { control: "array" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
  tags: ["autodocs"],
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  const handleChange = (event) => setSelectedValue(event.target.value);

  return <Select {...args} value={selectedValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Select an option",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  value: "option1",
};
