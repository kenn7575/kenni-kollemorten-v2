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
<div class="flex justify-between custom-hight">
  <!-- text -->
  <div class="flex flex-col items-start justify-evenly w-3/12 p-4">
    <div>
      <h1 class="text-slate-500 text-4xl">I'm</h1>
      <h1 class=" dark:text-slate-50 text-slate-800">Kenni Kollemorten</h1>
    </div>
    <p class="text-slate-400">
      I'm a student at Syddansk Erhvervsskole Odense, and i study to be a Data
      Technician Specialised in Programming. I do web development, database
      engineering and programming in general.
    </p>
    <button
      class="bg-primary text-slate-50 transition-all rounded-lg py-2 px-12 border-2 border-primary hover:bg-transparent"
    >
      <i class="fa-solid fa-star pr-2" /> Portfolie</button
    >
    <div class="flex gap-4 p-1 text-3xl border-b-2 border-slate-300">
      <a href="#"><i class="fa-brands fa-github" /></a>
      <a href="#"><i class="fa-brands fa-linkedin" /></a>
      <a href=""><i class="fa-brands fa-youtube" /></a>
      <a href=""><i class="fa-brands fa-square-behance" /></a>
      <a href=""><i class="fa-solid fa-envelope" /></a>
    </div>
  </div>
  <!-- content -->
  <div class="w-7/12 bg-rose-500">
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
  <!-- tabs -->
  <div class="flex gap-2 p-2 flex-col justify-center w-2/12 text-slate-50">
    <button
      class="py-3 px-8 h-20 rounded-2xl dark:bg-slate-700 bg-slate-400 {one}"
      on:click={() => (selection = "one")}
    >
      <h5>Front-end</h5>
    </button>
    <button
      class="py-3 px-8 h-20 rounded-2xl dark:bg-slate-700 bg-slate-400 {two}"
      on:click={() => (selection = "two")}
    >
      <h5>Back-end</h5>
    </button>
    <button
      class="py-3 px-8 h-20 rounded-2xl dark:bg-slate-700 bg-slate-400 dark:border-slate-50 border-slate-700 {three}"
      on:click={() => (selection = "three")}
    >
      <h5>Technologies</h5>
    </button>
  </div>
</div>

<style>
  .custom-hight {
    height: calc(100vh - 5rem);
  }
  .selected {
    background: #d90452;

    border: 2px solid;
  }
</style>
