<template>
	<div class="newsletter mt-8">
		<h2 class="font-serif">Suscribete a nuestro boletín informativo</h2>
		<p class="body-1 paragraph--text mt-1">
			y recibe una notificación cuando la aplicación esté lista para Android!
		</p>
		<div class="d-md-flex mt-6">
			<v-text-field
				class="mr-md-3"
				append-icon="mdi-email-outline"
				background-color="surface"
				solo
				color="white"
				flat
				placeholder="Tu correo"
				type="email"
				validate-on-blur
				label="Correo"
				depresed
				:style="{ maxWidth: !smAndUp ? '100%' : '80%' }"
			></v-text-field>
			<v-btn
				elevation="0"
				color="primary"
				class="text-capitalize"
				:block="!smAndUp ? true : false"
				large
				height="48"
				>Enviar</v-btn
			>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			smAndUp() {
				return this.$vuetify.breakpoint.smAndUp;
			}
		}
	};
</script>
