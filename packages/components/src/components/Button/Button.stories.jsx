import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["text", "outlined", "contained"] },
    color: {
      control: "radio",
      options: [
        "default",
        "inherit",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
  },
};

const Template = (args) => <Button {...args}>Click Me</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: "contained",
  color: "primary",
};
