<template>
	<div>
		<nav class="panel column is-offset-2 is-8">
		  <p class="panel-heading">
		    Vue.js Phonebook
		    <button class="button is-link is-outlined" @click="openAdd">
		      Nuevo Número
		    </button>
		  </p>
		  <div class="panel-block">
		    <p class="control has-icons-left">
		      <input class="input is-small" type="text" placeholder="search">
		      <span class="icon is-small is-left">
		        <i class="fas fa-search" aria-hidden="true"></i>
		      </span>
		    </p>
		  </div>

		  <a class="panel-block">
		    <span class="column is-9">
			    marksheet
		    </span>
		    <span class="column is-1">
		    	<i class="has-text-danger fas fa-trash-alt"></i>
		    </span>
		    <span class="column is-1">
		    	<i class="has-text-info fas fa-edit"></i>
		    </span>
		    <span class="column is-1">
		    	<i class="has-text-success fas fa-eye"></i>
		    </span>
		  </a>
		</nav>

		<add-component :openmodal="addActive" @closeRequest="close"></add-component>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				addActive: ''
			}
		},
		methods: {
			openAdd() {
				this.addActive = 'is-active'
			},
			close() {
				this.addActive = ''
			}
		}
	}
</script>