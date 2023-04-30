<script lang="ts">
  import { setTheme, changeTheme } from "../services/theme";
  import { onMount } from "svelte";
  function handleTheme(s: String) {
    changeTheme(s);
    setTheme();
  }

  onMount(() => {
    setTheme();
  });
  let selection = "Color";
  $: handleTheme(selection);
</script>
