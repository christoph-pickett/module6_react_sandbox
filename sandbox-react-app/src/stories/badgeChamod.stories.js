import BadgeChamod from "./boxChamod";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Chamod/Badge',
  component: BadgeChamod,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};


export const Primary = {
    // args: {
    //   size: "100px",
    //   backgroundColor: "blue",
    // },
  };