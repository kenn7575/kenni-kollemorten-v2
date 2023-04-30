<script lang="ts">
  import logo from "../../../../public/logo.png";
  import NavigationLinks from "../navigationLinks.svelte";
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
  <button
    class="py-3 px-8 rounded-full bg-gradient-to-r from-primary to-secondary"
    >Kontakt mig</button
  >
</nav>

<style>
</style>
