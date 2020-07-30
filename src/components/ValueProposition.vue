<template>
	<v-container tag="section" class="min-h--100vh">
		<v-row no-gutters>
			<v-col cols="12" md="5" justify-self="center">
				<div class="proposition mt-1 mt-sm-7">
					<h1 class="proposition__title font-serif">
						Con Pagami, encontraras todo lo que necesitas en productos y servicios
					</h1>
					<h2 class="subtitle-1 paragraph--text">
						Te ofrecemos un directorio comercial interactivo para realizar pedidos a domicilio y solicitar los servicios mas cercanos a tu ubicación geográfica
					</h2>
				</div>
				<app-newsletter></app-newsletter>
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
	import AppNewsletter from "@/components/AppNewsletter.vue";

	export default {
		components: {
			BrandIllustration,
			AppNewsletter
		}
	};
</script>

<style>
	.proposition__title {
		font-size: 2.3125rem;
		font-weight: normal;
	}
</style>
