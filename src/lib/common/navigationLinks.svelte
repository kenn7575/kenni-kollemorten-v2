<script>
  import { Link } from "svelte-routing";
</script>

<ul class="flex gap-8 mx-8">
  <li>
    <Link to="home">Home</Link>
  </li>
  <li>
    <Link to="projects">Projects</Link>
  </li>
  <li>
    <Link to="resume">Resume</Link>
  </li>
  <li>
    <Link to="about">About</Link>
  </li>
</ul>

<style>
  li {
    position: relative;
    padding: 0 0.5rem;
  }
  li::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #d90452, #da684d);

    transition: width 0.3s ease;
  }
  li:hover::before {
    width: 100%;
  }
</style>
