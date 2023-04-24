<script>
  import { Input, Label, Helper } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";

  import logo from "../../../../public/logo.jpeg";
  import { setTheme, changeTheme } from "../../services/theme";
  function ChangeTheme() {
    changeTheme();
    setTheme();
  }

  onMount(() => {
    setTheme();
  });
</script>

<nav>
  <div class="logo">
    <img src={logo} alt="" srcset="" />
  </div>
  <ul>
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
  <div class="flex gap-4">
    <Label class="space-y-2">
      <div class="input">
        <Input name="search" type="search" placeholder="Search" size="md" />
      </div>
    </Label>
    <button on:click={ChangeTheme}><i class="fa-solid fa-bars" /></button>
  </div>
</nav>

<style>
  nav {
    padding: 0.5rem 4rem;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-color: #d90452;
    border-style: solid;
    border-width: 0 0 2px 0;
  }
  button {
    background: #d90452;
    width: 2.7rem;
    height: 2.7rem;
    color: white;
    font-size: 1.5rem;
    border-radius: 0.5rem;
  }

  ul {
    display: flex;
    gap: 2rem;
  }
  .logo img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
</style>
