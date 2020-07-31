<template>
	<v-container id="empresas" tag="section">
		<v-row no-gutters>
			<v-col cols="12" sm="8" md="5">
				<div
					class="header-title text-uppercase primary-light--text font-weight-bold"
				>
					Empresas
				</div>
				<h1 class="business__section-title font-serif mt-10">
					Cómo ayudamos a tu empresa o negocio?
				</h1>
			</v-col>
			<v-row>
				<!-- one -->
				<v-col cols="12" sm="6" md="4" class="mt-12">
					<div
						class="business__icon_color--blue d-flex justify-center align-center mx-auto"
					>
						<v-icon color="blue">{{ mdiMapSearchOutline }}</v-icon>
					</div>
					<h1 class="title mb-4 text-center mt-6">
						Hazte descubrir por nuevos clientes a través del mapa
					</h1>
					<p class="subtitle-1 paragraph--text">
					Te ofrecemos un mapa interactivo con tus clientes muestra tus productos y servicios con una ubicación precisa
					</p>
					<p class="subtitle-1 paragraph--text">
						Agrega fácilmente tu negocio o deja que nuestros socios lo hagan por
						ti, ya seas una empresa nueva o una que lleva tiempo en el mercado
					</p>
				</v-col>
				<!-- two -->
				<v-col cols="12" sm="6" md="4" class="mt-12">
					<div
						class="business__icon_color--green d-flex justify-center align-center mx-auto"
					>
						<v-icon color="green">{{ mdiShieldCheckOutline }}</v-icon>
					</div>
					<h1 class="title mb-4 text-center mt-6">
						Destaca con la insignia de verificación comercial
					</h1>
					<p class="subtitle-1 paragraph--text">
						La mayoría de los clientes confían en lo que otros dicen sobre tu
						negocio
					</p>
					<p class="subtitle-1 paragraph--text">
						Aumenta la adquisición de clientes y confianza al demostrar que eres
						un negocio verificado
					</p>
				</v-col>
				<!-- three -->
				<v-col cols="12" sm="6" md="4" class="mt-12">
					<div
						class="business__icon_color--red d-flex justify-center align-center mx-auto"
					>
						<v-icon color="red">{{ mdiPhoneOutline }}</v-icon>
					</div>
					<h1 class="title mb-4 text-center mt-6">
						Mantén actualizada la información de contacto de tu empresa
					</h1>
					<p class="subtitle-1 paragraph--text">
						Números telefónicos y direcciones desactualizados pueden ser un
						problema real para clientes que intentan comunicarse con tu negocio
					</p>
					<p class="subtitle-1 paragraph--text">
						Mantén actualizada la información de contacto agregando,
						actualizando y eliminando cuando sea necesario
					</p>
				</v-col>
				<!-- four -->
				<v-col cols="12" sm="6" md="4" class="mt-12">
					<div
						class="business__icon_color--purple d-flex justify-center align-center mx-auto"
					>
						<v-icon color="purple">{{ mdiStorefront }}</v-icon>
					</div>
					<h1 class="title mb-4 text-center mt-6">
						Cataloga tus productos o servicios
					</h1>
					<p class="subtitle-1 paragraph--text">
						Puedes solicitar servicios y pedidos en restaurantes, supermercados, farmacias, talleres,hoteles, taxis...... 
					</p>
					<p class="subtitle-1 paragraph--text">
						Mantén a tus clientes comprometidos con tu negocio mostrando
						productos o servicios que ofreces
					</p>
				</v-col>
				<!-- five -->
				<v-col cols="12" sm="6" md="4" class="mt-12">
					<div
						class="business__icon_color--gold d-flex justify-center align-center mx-auto"
					>
						<v-icon color="gold">{{ mdiCoinOutline }}</v-icon>
					</div>
					<h1 class="title mb-4 text-center mt-6">
						Transfiere dinero fácilmente entre cuentas
					</h1>
					<p class="subtitle-1 paragraph--text">
						Con comisiones cero, transfiere dinero ganado a través del programa
						de socios Pagami entre cuentas registradas y retiralo a través de
						PayPal
					</p>
				</v-col>
			</v-row>
		</v-row>
	</v-container>
</template>

<script>
	import {
		mdiMapSearchOutline,
		mdiShieldCheckOutline,
		mdiPhoneOutline,
		mdiStorefront,
		mdiCoinOutline
	} from "@mdi/js";

	export default {
		data() {
			return {
				mdiMapSearchOutline,
				mdiShieldCheckOutline,
				mdiPhoneOutline,
				mdiStorefront,
				mdiCoinOutline
			};
		}
	};
</script>

<style>
	.business__icon_color--blue,
	.business__icon_color--green,
	.business__icon_color--red,
	.business__icon_color--purple,
	.business__icon_color--gold {
		width: 56px;
		height: 56px;
		border-radius: 4px;
	}
	.business__icon_color--blue {
		background-color: rgba(119, 170, 255, 0.3);
	}
	.business__icon_color--green {
		background-color: rgba(104, 211, 145, 0.3);
	}
	.business__icon_color--red {
		background-color: rgba(229, 62, 62, 0.3);
	}
	.business__icon_color--purple {
		background-color: rgba(138, 114, 203, 0.3);
	}
	.business__icon_color--gold {
		background-color: rgba(251, 211, 141, 0.3);
	}
	.business__section-title {
		font-size: 34px;
	}
</style>
