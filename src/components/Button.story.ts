/// <reference types="svelte" />
import Button from "./Button.svelte";
import type { Story } from "../env";

const story: Story = {
  title: "Button",
  component: Button,
  props: {
    disabled: false,
  },
};

export default story;
