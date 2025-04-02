import { fn } from "@storybook/test";

import TextFieldTate from "./textFieldTate";

export default {
  title: "Tate/TextField",
  component: TextFieldTate,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "What background color to use",
    },
    padding: {
      control: "text",
      description: "What the padding should be",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "How large should the input field and the text inside be",
    },
    border: {
      control: "text",
      description: "What the border should look like",
    },
    borderRadius: {
      control: "text",
      description: "What the border corners should look like",
    },
  },
};

export const Primary = {
  args: {
    backgroundColor: "rgba(252, 252, 249, 0.9)",
    padding: "10px",
    size: "medium",
    border: "3px solid black",
    borderRadius: "5px",
  },
};

export const Small = {
  args: {
    backgroundColor: "rgba(252, 252, 249, 0.9)",
    padding: "10px",
    size: "small",
    border: "3px solid black",
    borderRadius: "5px",
  },
};

export const Large = {
  args: {
    backgroundColor: "rgba(252, 252, 249, 0.9)",
    padding: "10px",
    size: "large",
    border: "3px solid black",
    borderRadius: "5px",
  },
};

export const Thin_Border = {
  args: {
    backgroundColor: "rgba(252, 252, 249, 0.9)",
    padding: "10px",
    size: "medium",
    border: "1px solid black",
    borderRadius: "5px",
  },
};

export const Square_Border = {
  args: {
    backgroundColor: "rgba(252, 252, 249, 0.9)",
    padding: "10px",
    size: "medium",
    border: "3px solid black",
    borderRadius: "0px",
  },
};
