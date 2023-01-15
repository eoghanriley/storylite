/// <reference types="svelte" />
import Test from "./test.svelte";
import type { Story } from "../env";

const story: Story = {
  title: "Test",
  component: Test,
  props: {
    msg: "test",
  },
};

export default story;
