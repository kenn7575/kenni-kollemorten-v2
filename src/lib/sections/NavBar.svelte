<script>
	import logo from '$lib/img/IMG_2401.png';
</script>

<div class="drawer drawer-end">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar bg-base-300">
			<div class="navbar-start">
				<a href="/">
					<img width="40" class="sm:w-12" src={logo} alt="" />
				</a>
			</div>
			<div class="navbar-center hidden sm:flex">
				<div class="join">
					<a class="btn btn-ghost px-8" href="/">Hjem</a>

					<a class="btn btn-ghost px-8" href="/projekter">projekter</a>

					<a class="btn btn-ghost px-8" href="/cv">CV</a>
				</div>
			</div>
			<div class="navbar-end">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
		</div>
		<!-- Page content here -->
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 w-80 h-full bg-base-200">
			<!-- Sidebar content here -->
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
