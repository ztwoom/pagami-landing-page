<template>
	<v-container class="mt-10" tag="section" id="precios">
		<v-row no-gutters>
			<v-col cols="12">
				<div
					class="header-title text-uppercase primary-light--text font-weight-bold"
				>
					Planes para empresas
				</div>
			</v-col>      
      <v-col cols="12" md="6">
				<div class="plan__item">
					<div class="text-center">
						<div class="subtitle-1 font-weight-medium primary-light--text ">
							Se parte de la Industria 4.0
						</div>
						<h1 class="plans__price font-serif ">$ USD</h1>
					</div>
					<div class="d-flex mt-8 plans__features mx-auto">
						<span>
							<v-icon color="green" size="20">{{ mdiCheckCircle }}</v-icon>
						</span>
						<div class="paragraph--text subtitle-1 ml-4">
							Registrar la ubicación del negocio en nuestro mapa y mostar la información de contacto
						</div>
					</div>
					<div class="d-flex mt-8 plans__features mx-auto">
						<span>
							<v-icon color="green" size="20">{{ mdiCheckCircle }}</v-icon>
						</span>
						<div class="paragraph--text subtitle-1 ml-4">
							Volante digital aumenta la visibilidad de tu empresa
						</div>
					</div>
				</div>
			</v-col>
      
			<v-col cols="12" md="6">
				<div class="plan__item">
					<div class="text-center">
						<div class="subtitle-1 font-weight-medium primary-light--text ">
							Se parte de la Industria 4.0
						</div>
						<h1 class="plans__price font-serif ">$30 USD / 1 año </h1>
					</div>
					<div class="d-flex mt-8 plans__features mx-auto">
						<span>
							<v-icon color="green" size="20">{{ mdiCheckCircle }}</v-icon>
						</span>
						<div class="paragraph--text subtitle-1 ml-4">
							Acceder al catalogo de productos, herramienta administrativa para recibir pedidos, soporte personalizado,volante digital Mejoras en el seo y posicionamiento
						</div>
					</div>
					<div class="d-flex mt-8 plans__features mx-auto">
						<span>
							<v-icon color="green" size="20">{{ mdiCheckCircle }}</v-icon>
						</span>
						<div class="paragraph--text subtitle-1 ml-4">
							Acceso Premium a las próximas funciones valido solo para compras realizadas antes del 15 septiembre 2020
						</div>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mdiCheckCircle } from "@mdi/js";
	export default {
		data() {
			return {
				mdiCheckCircle
			};
		}
	};
</script>

<style>
	.plan {
		position: relative;
	}
	.plan__divider {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 1px;
		border-right: 1px solid rgba(255, 255, 255, 0.1);
	}
	.plan__item {
		height: 18rem;
		margin-top: 4rem;
	}
	.plans__price {
		font-size: 2rem;
	}
	.plans__features {
		max-width: 24rem;
	}
</style>
