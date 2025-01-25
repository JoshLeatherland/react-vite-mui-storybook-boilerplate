import React, { useState } from "react";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    value: { control: "number" },
    onChange: { action: "changed" },
    tabs: { control: "array" },
  },
  tags: ["autodocs"],
};

const Template = (args) => {
  const [selectedTab, setSelectedTab] = useState(args.value);

  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  return <Tabs {...args} value={selectedTab} onChange={handleTabChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 0,
  tabs: [
    { label: "Tab 1", value: 0 },
    { label: "Tab 2", value: 1 },
    { label: "Tab 3", value: 2 },
  ],
};
