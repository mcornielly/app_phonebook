<template>
	<div>
		<div class="modal" :class="openmodal">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">Modal title</p>
		      <button class="delete" aria-label="close" @click="close"></button>
		    </header>
		    
		    <section class="modal-card-body">
		      	<div class="field">
				  <label class="label">Name</label>
				  <div class="control">
				    <input class="input" :class="{'is-danger' : errors.name}" type="text" placeholder="Nombre" v-model="lists.name">
				  </div>
				  <small v-if="errors.name" class="has-text-danger">{{ errors.name[0] }}</small>
				</div>

				<div class="field">
				  <label class="label">Teléfono</label>
				  <div class="control">
				    <input class="input" :class="{'is-danger' : errors.phone_number}" type="number" placeholder="Teléfono" v-model="lists.phone_number">
				  </div>
				  <small v-if="errors.phone_number" class="has-text-danger">{{ errors.phone_number[0] }}</small>
				</div>

				<div class="field">
				  <label class="label">Email</label>
				  <div class="control">
				    <input class="input" :class="{'is-danger' : errors.email}" type="email" placeholder="email" v-model="lists.email">
				  </div>
				  <small v-if="errors.email" class="has-text-danger">{{ errors.email[0] }}</small>
				</div>
		    </section>

		    <footer class="modal-card-foot">
		      <button class="button is-success" @click="save">Save changes</button>
		      <button class="button" @click="close">Cancel</button>
		    </footer>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['openmodal'],
		data() {
			return{
				lists: {
					name: '',
					phone_number: '',
					email: ''
				},
				errors: {}
			}
		},
		methods: {
			close() {
				this.$emit('closeRequest')
			},
			save() {
				axios.post('/phonebook', this.$data.lists).then((response) => {
			    this.close();
			  })
			  .catch((error) => this.errors = error.response.data.errors);
			}
		}
	}
</script>
