import { useState, useEffect } from "react";
import Modal from "./Modal";
import Button from "../Button";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    open: { control: "boolean" },
    onClose: { action: "closed" },
  },
  tags: ["autodocs"],
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.open);

  useEffect(() => {
    setIsOpen(args.open);
  }, [args.open]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={toggleModal}>Open Modal</Button>
      <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
        Example Modal Content
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
};
