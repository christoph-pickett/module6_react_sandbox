import { Modal } from "../components/Modal/Modal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: [],
};

export const Main = {
    args: {
        children: [
            (<h2>Modal</h2>),
            (<hr />),
            (<p>Hello, world!</p>)
        ]
    },
  };