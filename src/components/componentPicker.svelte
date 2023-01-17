<script lang="ts">
  import { onMount } from "svelte";
  import type { Story } from "../env";

  let button = true;
  let story: Story = {
    title: "",
    component: undefined,
    props: {},
  };
  let props: {};

  const onClick = async () => {
    if (button) {
      story = (await import("../components/test.story")).default;
    } else {
      story = (await import("./Button.story")).default;
    }
    button = !button;
  };

  onMount(async () => {
    onClick();
    console.log("e");
  });

  // NOTE needs to be broken out into new variable for spreading props to work
  $: props = story.props;
</script>

<button on:click={onClick}>switch components</button>

<svelte:component this={story.component} {...props} />
