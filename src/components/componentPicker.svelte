<script>
  import { onMount } from "svelte";

  let component;
  let button = true;

  const onClick = async () => {
    if (button) {
      component = (await import("./test.svelte")).default;
    } else {
      component = (await import("./Button.svelte")).default;
    }
    button = !button;
    console.log(component);
  };

  onMount(async () => {
    component = (await import("./Button.svelte")).default;
    console.log(component);
  });
</script>

<button on:click={onClick}>switch components</button>

<svelte:component this={component} />
