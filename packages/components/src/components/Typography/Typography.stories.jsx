import React from "react";
import Typography from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "overline",
        "button",
        "inherit",
      ],
    },
  },
};

const Template = (args) => (
  <Typography {...args}>This is a text component</Typography>
);

export const Default = Template.bind({});
Default.args = {
  variant: "body1",
};
