<script>
  import HeroDefault from "./hero-default.svelte";
  import HeroMobile from "./hero-mobile.svelte";
  import MediaQuery from "svelte-media-queries";
</script>

<MediaQuery query="(min-width: 1180px) " let:matches>
  {#if matches}
    <HeroDefault />
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: 1180px) " let:matches>
  {#if matches}
    <HeroMobile />
  {/if}
</MediaQuery>
