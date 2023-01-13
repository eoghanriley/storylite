<script>
  import { onMount } from "svelte";

  let button = true;
  let story = {
    title: undefined,
    component: undefined,
    props: {},
  };
  let data;

  const onClick = async () => {
    if (button) {
      story = (await import("./test.story")).default;
    } else {
      story = (await import("./Button.story")).default;
    }
    button = !button;
  };

  onMount(async () => {
    onClick();
  });

  // NOTE needs to be broken out into new variable for spreading props to work
  $: data = story.props;
</script>

<button on:click={onClick}>switch components</button>

<svelte:component this={story.component} {...data} />
