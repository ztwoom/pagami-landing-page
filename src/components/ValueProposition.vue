<template>
	<v-container>
		<v-row no-gutters>
			<v-col cols="12" md="5" justify-self="center">
				<div class="proposition mt-1 mt-sm-7">
					<h1 class="proposition__title font-serif">
						Ilumina tu negocio y conecta con nuevos clientes a tu alrededor
					</h1>
					<h2 class="subtitle-1 paragraph--text">
						Aprovechando mapas para la gestión y crecimiento empresarial
					</h2>
				</div>
				<div class="newsletter mt-8 ">
					<h2 class="font-serif">Suscribete a nuestro newsletter</h2>
					<p class="body-1 paragraph--text mt-1">
						y recibe una notificación cuando la aplicación esté lista para
						Android!
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
			</v-col>
			<v-col
				cols="12"
				md="7"
				align-self="end"
				class="d-flex"
				style="margin-top: -9rem;"
			>
				<brand-illustration
					class="mx-auto d-none d-md-block"
				></brand-illustration>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import BrandIllustration from "@/assets/svg/illustration.svg";

	export default {
		components: {
			BrandIllustration
		},
		computed: {
			smAndUp() {
				return this.$vuetify.breakpoint.smAndUp;
			}
		},
		mounted() {
			console.log(this.$vuetify.breakpoint);
		}
	};
</script>

<style>
	.proposition__title {
		font-size: 2.3125rem;
		font-weight: normal;
	}
</style>
