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
  <div class="flex flex-col justify-around w-1/5">
    <h1 class="text-5xl font-bold text-slate-600">1</h1>
    <h1 class="text-5xl font-bold text-slate-600">2</h1>
    <h1 class="text-5xl font-bold text-slate-600">3</h1>
  </div>
  <!-- content -->
  <div class="w-3/5 bg-amber-300" />
  <!-- tabs -->
  <div class="flex flex-col justify-center w-1/5">
    <button
      class="py-3 px-8 rounded-full bg-slate-700 {one}"
      on:click={() => (selection = "one")}
    >
      1
    </button>
    <button
      class="py-3 px-8 rounded-full bg-slate-700 {two}"
      on:click={() => (selection = "two")}
    >
      2
    </button>
    <button
      class="py-3 px-8 rounded-full bg-slate-700 {three}"
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
