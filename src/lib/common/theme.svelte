<script lang="ts">
  import { setTheme, changeTheme, getTheme } from "../services/theme";
  import { onMount } from "svelte";
  let theme: String = getTheme();
  function handleTheme() {
    if (theme === "Dark") {
      theme = "Light";
    } else {
      theme = "Dark";
    }
    changeTheme(theme);
    setTheme();
  }

  onMount(() => {
    setTheme();
  });
</script>

<button class="text-3xl" on:click={handleTheme}>
  {#if theme === "Dark"}
    <i class="fa-solid fa-moon" />
  {:else}
    <i class="fa-solid fa-sun" />
  {/if}
</button>
