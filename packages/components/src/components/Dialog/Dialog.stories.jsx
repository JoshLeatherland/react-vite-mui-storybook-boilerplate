import { useState, useEffect } from "react";
import Dialog from "./Dialog";
import Button from "../Button";

export default {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    onClose: { action: "closed" },
    title: { control: "text" },
  },
};

const Template = (args) => {
  const [open, setOpen] = useState(args.open);

  useEffect(() => {
    setOpen(args.open);
  }, [args.open]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog {...args} open={open} onClose={() => setOpen(false)}>
        Example Children as Text
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  title: "Dialog Title",
};
