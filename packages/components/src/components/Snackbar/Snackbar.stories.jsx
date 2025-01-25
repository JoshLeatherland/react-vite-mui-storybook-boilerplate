import { useState, useEffect } from "react";
import Snackbar from "./Snackbar";
import Button from "../Button";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
  argTypes: {
    open: { control: "boolean" },
    onClose: { action: "closed" },
    message: { control: "text" },
  },
  tags: ["autodocs"],
};

const Template = (args) => {
  const [open, setOpen] = useState(args.open);

  useEffect(() => {
    setOpen(args.open);
  }, [args.open]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
      <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  message: "This is a snackbar!",
};
