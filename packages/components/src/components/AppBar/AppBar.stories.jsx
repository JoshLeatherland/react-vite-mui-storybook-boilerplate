import React from "react";
import AppBar from "./AppBar";
import Button from "../Button";

export default {
  title: "Components/AppBar",
  component: AppBar,
  argTypes: {
    title: { control: "text" },
  },
  tags: ["autodocs"],
};

const Template = (args) => <AppBar {...args}></AppBar>;

export const Default = Template.bind({});
Default.args = {
  title: "My App",
};
