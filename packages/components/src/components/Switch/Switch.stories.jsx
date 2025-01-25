import { useState, useEffect } from "react";
import Switch from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
  tags: ["autodocs"],
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (event) => setChecked(event.target.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return <Switch {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
};
