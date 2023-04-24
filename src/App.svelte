<script lang="ts">
  // svelte
  import { Router, Route } from "svelte-routing";
  import { onMount } from "svelte";

  

  // pages
  import error404 from "./lib/common/404.svelte";
  import home from "./lib/pages/home/home.svelte";
  import Nav from "./lib/common/nav/nav.svelte";
  import Resume from "./lib/pages/resume/resume.svelte";
  import Projects from "./lib/pages/projects/projects.svelte";
  import About from "./lib/pages/about/about.svelte";
  
</script>

<div class="app">
  <Router>
    <header>
      <Nav />
    </header>

    <main class="dark:bg-slate-700 min-h-screen">
      <Route component={error404} />
      <Route path="/" component={home} />
      <Route path="home" component={home} />
      <Route path="about" component={About} />
      <Route path="projects" component={Projects} />
      <Route path="resume" component={Resume} />
    </main>
  </Router>
</div>

<style>
  .app {
    min-height: 100vh;
  }
</style>
