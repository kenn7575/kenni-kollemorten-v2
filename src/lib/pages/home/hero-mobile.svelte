<script>
  $: selection = "one";
  let one = "selected";
  let two = "";
  let three = "";
  $: if (selection === "one") {
    one = "selected";
    two = "";
    three = "";
  }
  $: if (selection === "two") {
    one = "";
    two = "selected";
    three = "";
  }
  $: if (selection === "three") {
    one = "";
    two = "";
    three = "selected";
  }
</script>

<!-- Foreground -->

<div class="p-4">
  <!-- title -->
  <h1 class="text-slate-500 text-4xl">I'm</h1>
  <h1 class=" dark:text-slate-50 text-slate-800">Kenni Kollemorten</h1>
  <div class="flex gap-8 mt-4 items-center">
    <button
      class="bg-primary text-slate-50 transition-all rounded-lg p-1 border-2 border-primary hover:bg-transparent"
    >
      <i class="fa-solid fa-star pr-2" /> Portfolie</button
    >
    <div class="flex gap-4 text-3xl w-fit">
      <a href="#"><i class="fa-brands fa-github" /></a>
      <a href="#"><i class="fa-brands fa-linkedin" /></a>
      <a href=""><i class="fa-brands fa-youtube" /></a>
      <a href=""><i class="fa-brands fa-square-behance" /></a>
      <a href=""><i class="fa-solid fa-envelope" /></a>
    </div>
  </div>

  <!-- tabs -->
  <div class="flex gap-2 py-1 border-t-2 mt-8 justify-center">
    <button
      class="py-3 w-1/3 rounded-2xl dark:bg-slate-800 bg-slate-300 {one}"
      on:click={() => (selection = "one")}
    >
      <h5>Front-end</h5>
    </button>
    <button
      class=" py-3 w-1/3 rounded-2xl dark:bg-slate-800 bg-slate-300 {two}"
      on:click={() => (selection = "two")}
    >
      <h5>Back-end</h5>
    </button>
    <button
      class="py-3 w-1/3 rounded-2xl dark:bg-slate-800 bg-slate-300 {three}"
      on:click={() => (selection = "three")}
    >
      <h5>Technologies</h5>
    </button>
  </div>
  <div class=" bg-rose-500 h-96">
    {#if selection === "one"}
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-5xl">1</h1>
      </div>
    {/if}
    {#if selection === "two"}
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-5xl">2</h1>
      </div>
    {/if}
    {#if selection === "three"}
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-5xl">3</h1>
      </div>
    {/if}
  </div>
</div>

<!-- content -->

<!-- tabs -->

<style>
  .selected {
    background: #d90452;
    color: #e5e7eb;
  }
</style>
