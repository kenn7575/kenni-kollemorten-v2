<script>
  import { Link } from "svelte-routing";
  import { Input, Label } from "flowbite-svelte";
  import Theme from "./theme.svelte";
</script>

<div class="flex flex-col gap-2 m-4">
  <div class="flex justify-between items-center">
    <Label class="space-y-2 mb-2 w-4/5">
      <Input
        class="h-11 box-border"
        name="search"
        type="search"
        placeholder="Search"
        size="md"
      />
    </Label>
    <div class="px-4 h-fit">
      <Theme />
    </div>
  </div>
  <div
    class="dark:hover:bg-slate-700 hover:bg-slate-200 flex bg-stale-600 p-3 gap-4 items-center rounded-md overflow-hidden"
  >
    <i class="fa-solid fa-house" />
    <Link to="home">Home</Link>
  </div>
  <div
    class="dark:hover:bg-slate-700 hover:bg-slate-200 flex bg-stale-600 p-3 gap-4 items-center rounded-md overflow-hidden"
  >
    <i class="fa-solid fa-flask" />
    <Link to="projects">Projects</Link>
  </div>
  <div
    class="dark:hover:bg-slate-700 hover:bg-slate-200 flex bg-stale-600 p-3 gap-4 items-center rounded-md overflow-hidden"
  >
    <i class="fa-solid fa-flask" />
    <Link to="resume">Resume</Link>
  </div>
  <div
    class="dark:hover:bg-slate-700 hover:bg-slate-200 flex bg-stale-600 p-3 gap-4 items-center rounded-md overflow-hidden"
  >
    <i class="fa-solid fa-flask" />
    <Link to="about">About</Link>
  </div>
</div>
