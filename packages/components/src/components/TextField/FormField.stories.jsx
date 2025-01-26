import React from "react";
import TextField from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    variant: { control: "radio", options: ["outlined", "filled", "standard"] },
    fullWidth: { control: "boolean" },
  },
  tags: ["autodocs"],
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  variant: "outlined",
  fullWidth: true,
};
