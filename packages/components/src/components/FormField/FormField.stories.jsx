import React from "react";
import FormField from "./FormField";

export default {
  title: "Components/FormField",
  component: FormField,
  argTypes: {
    variant: { control: "radio", options: ["outlined", "filled", "standard"] },
    fullWidth: { control: "boolean" },
  },
  tags: ["autodocs"],
};

const Template = (args) => <FormField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  variant: "outlined",
  fullWidth: true,
};
