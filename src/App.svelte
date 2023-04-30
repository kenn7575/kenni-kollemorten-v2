<script lang="ts">
  // svelte
  import { Router, Route } from "svelte-routing";
  import { setTheme } from "./lib/services/theme";
  import { onMount } from "svelte";
  import MediaQuery from "../node_modules/svelte-media-queries/components/MediaQuery.svelte";

  // pages
  import error404 from "./lib/common/404.svelte";
  import home from "./lib/pages/home/home.svelte";
  import NavDefault from "./lib/common/nav/navDefault.svelte";
  import NavMobile from "./lib/common/nav/navMobile.svelte";
  import Resume from "./lib/pages/resume/resume.svelte";
  import Projects from "./lib/pages/projects/projects.svelte";
  import About from "./lib/pages/about/about.svelte";

  onMount(() => {
    setTheme();
  });
</script>

<Router>
  <header class="sticky top-0 h-20 bg-slate-100 dark:bg-slate-800 z-50">
    <MediaQuery query="(min-width: 801px)" let:matches>
      {#if matches}
        <NavDefault />
      {/if}
    </MediaQuery>
    <MediaQuery query="(max-width: 800px)" let:matches>
      {#if matches}
        <NavMobile />
      {/if}
    </MediaQuery>
  </header>

  <main
    class="dark:bg-slate-700 dark:text-dark-text bg-slate-200 min-h-screen relative"
  >
    <Route component={error404} />
    <Route path="/" component={home} />
    <Route path="home" component={home} />
    <Route path="about" component={About} />
    <Route path="projects" component={Projects} />
    <Route path="resume" component={Resume} />
  </main>
</Router>

<style>
  main {
    min-height: calc(100vh - 5rem);
  }
</style>
