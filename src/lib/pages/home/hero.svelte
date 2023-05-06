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
      <h1 class="text-slate-500 text-5xl">I'm</h1>
      <h1 class="text-5xl text-slate-50">Kenni Kollemorten</h1>
    </div>
    <p class="text-slate-400">
      I'm a student at Syddansk Erhvervsskole Odense, and i study to be a Data
      Technician Specialised in Programming. I do web development, database
      engineering and programming in general.
    </p>
    <button
      class="bg-primary transition-all rounded-lg py-2 px-12 border-2 border-primary hover:bg-transparent"
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
  <div class="w-7/12 bg-amber-300" />
  <!-- tabs -->
  <div class="flex gap-2 p-2 flex-col justify-center w-2/12">
    <button
      class="py-3 px-8 h-20 rounded-2xl bg-slate-700 {one}"
      on:click={() => (selection = "one")}
    >
      1
    </button>
    <button
      class="py-3 px-8 h-20 rounded-2xl bg-slate-700 {two}"
      on:click={() => (selection = "two")}
    >
      2
    </button>
    <button
      class="py-3 px-8 h-20 rounded-2xl bg-slate-700 {three}"
      on:click={() => (selection = "three")}
    >
      3
    </button>
  </div>
</div>

<style>
  .custom-hight {
    height: calc(100vh - 5rem);
  }
  .selected {
    background: #d90452;
  }
</style>
