<template>
	<v-container class="mt-10" tag="section" id="precios">
		<v-row no-gutters>
			<v-col cols="12">
				<div
					class="header-title text-uppercase primary-light--text font-weight-bold"
				>
					Precios
				</div>
			</v-col>
			<v-col cols="12" md="6" class="plan">
				<span class="plan__divider d-none d-md-flex"></span>
				<div class="plan__item">
					<div class="text-center">
						<div class="subtitle-1 font-weight-medium primary-light--text ">
							Gratis de por vida
						</div>
						<h1 class="plans__price font-serif ">$0 USD / $0 COP</h1>
					</div>
					<div class="d-flex mt-8 plans__features mx-auto">
						<span>
							<v-icon color="green" size="20">{{ mdiCheckCircle }}</v-icon>
						</span>
						<div class="paragraph--text subtitle-1 ml-4">
							Capacidad para cargar información básica de la empresa
						</div>
					</div>
				</div>
			</v-col>
			<v-col cols="12" md="6">
				<div class="plan__item">
					<div class="text-center">
						<div class="subtitle-1 font-weight-medium primary-light--text ">
							Emprendedor
						</div>
						<h1 class="plans__price font-serif ">$12,24 USD / $39,000 COP</h1>
					</div>
					<div class="d-flex mt-8 plans__features mx-auto">
						<span>
							<v-icon color="green" size="20">{{ mdiCheckCircle }}</v-icon>
						</span>
						<div class="paragraph--text subtitle-1 ml-4">
							Acceso al administrador del catálogo de productos
						</div>
					</div>
					<div class="d-flex mt-8 plans__features mx-auto">
						<span>
							<v-icon color="green" size="20">{{ mdiCheckCircle }}</v-icon>
						</span>
						<div class="paragraph--text subtitle-1 ml-4">
							Acceso a las próximas funciones
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
