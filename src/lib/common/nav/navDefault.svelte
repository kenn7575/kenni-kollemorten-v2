<script lang="ts">
  import logo from "../../../../public/logo.png";
  import NavigationLinks from "../navigationLinks.svelte";
  import Menu from "../menu.svelte";
  $: showMenu = "false";

  function toggleMenu() {
    if (showMenu === "hide") {
      showMenu = "show";
    } else {
      showMenu = "hide";
    }
  }
</script>

<nav
  class=" dark:text-slate-50 px-8 h-full flex justify-between items-center z-50"
>
  <div class="w-16 h-16 rounded-full min-w-fit">
    <img src={logo} alt="fox" class="h-full" />
  </div>
  <NavigationLinks />
  <div class="relative">
    <button
      on:click={toggleMenu}
      class="text-white relative z-10 rounded-lg w-11 h-11 text-2xl bg-gradient-to-r from-primary to-secondary"
    >
      {#if showMenu !== "show"}
        <i class="fa-solid fa-bars" />
      {:else}
        <i class="fa-solid fa-square-up-right" />
      {/if}
    </button>
    <div
      class="absolute rounded-lg bg-slate-300 dark:bg-slate-600 top-0 right-0 h-11 w-11 overflow-hidden transition-all duration-500 {showMenu}"
    >
      <Menu />
    </div>
  </div>
</nav>

<style>
  .show {
    width: 20rem !important;
    height: 20rem !important;
    top: 100%;
    transform: translateY(0.5rem);
  }
</style>
