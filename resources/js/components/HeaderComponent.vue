<template>
	<div>
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" href="https://bulma.io">
				  <!-- <img src="" alt="MCORNIELLY" width="112" height="28"> -->
				  <strong>MCORNIELLY</strong>
				</a>

				<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-app">
				  <span aria-hidden="true"></span>
				  <span aria-hidden="true"></span>
				  <span aria-hidden="true"></span>
				</a>
			</div>
				
			<div id="navbar-app" class="navbar-menu is-active">
				<div class="navbar-start">
					<router-link to="/home" class="navbar-item">Home</router-link>
    				<router-link to="/about" class="navbar-item">Acerca</router-link>
				</div>
			</div>
		</nav>
	</div>
</template>

<!-- code javascript -->
<script>
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});
</script>