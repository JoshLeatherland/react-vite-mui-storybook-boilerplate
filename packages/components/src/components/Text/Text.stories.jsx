import React from "react";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
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

const Template = (args) => <Text {...args}>This is a text component</Text>;

export const Default = Template.bind({});
Default.args = {
  variant: "body1",
};
