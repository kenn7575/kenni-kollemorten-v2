<script>
  import { Link } from "svelte-routing";
  import { Input, Label } from "flowbite-svelte";
</script>

<div class="flex flex-col gap-2 m-4">
  <Label class="space-y-2 mb-2">
    <Input
      class="h-11 box-border"
      name="search"
      type="search"
      placeholder="Search"
      size="md"
    />
  </Label>
  <div
    class="hover:bg-slate-700 flex bg-stale-600 p-3 gap-4 items-center rounded-md overflow-hidden"
  >
    <i class="fa-solid fa-house" />
    <Link to="home">Home</Link>
  </div>
  <div
    class="hover:bg-slate-700 flex bg-stale-600 p-3 gap-4 items-center rounded-md overflow-hidden"
  >
    <i class="fa-solid fa-flask" />
    <Link to="projects">Projects</Link>
  </div>
  <div
    class="hover:bg-slate-700 flex bg-stale-600 p-3 gap-4 items-center rounded-md overflow-hidden"
  >
    <i class="fa-solid fa-flask" />
    <Link to="resume">Resume</Link>
  </div>
  <div
    class="hover:bg-slate-700 flex bg-stale-600 p-3 gap-4 items-center rounded-md overflow-hidden"
  >
    <i class="fa-solid fa-flask" />
    <Link to="about">About</Link>
  </div>
</div>
