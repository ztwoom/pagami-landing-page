<template>
	<v-container class="mt-10 pa-0" tag="section" fluid id="caracteristicas">
		<v-row no-gutters>
			<v-col cols="12">
				<v-container>
					<div
						class="header-title text-uppercase primary-light--text font-weight-bold"
					>
						Caraterísticas
					</div>
				</v-container>
			</v-col>
			<v-row class="mt-10" no-gutters>
				<v-col cols="12" md="6">
					<v-container class="py-5">
						<h1 class="text-center title">
							Mapa en tiempo real para explorar empresas cercanas
						</h1>
					</v-container>
					<div class="feature feature-1 pt-7">
						<v-img
							src="@/assets/img/pagami-feature-1.png"
							class="mx-auto"
							eager
							max-width="320"
						>
						</v-img>
					</div>
				</v-col>
				<v-col cols="12" md="6">
					<v-container class="py-5">
						<h1 class="text-center title">
							Perfil empresarial editable
						</h1>
					</v-container>
					<div class="feature feature-2 pt-7">
						<v-img
							src="@/assets/img/pagami-feature-2.png"
							class="mx-auto"
							eager
							max-width="320"
						>
						</v-img>
					</div>
				</v-col>
				<v-col cols="12" md="6">
					<v-container class="py-5">
						<h1 class="text-center title">
							Catálogo manejable de productos y servicios
						</h1>
					</v-container>
					<div class="feature feature-3 pt-7">
						<v-img
							src="@/assets/img/pagami-feature-3.png"
							class="mx-auto"
							eager
							max-width="320"
						>
						</v-img>
					</div>
				</v-col>
				<v-col cols="12" md="6">
					<v-container class="py-5">
						<h1 class="text-center title">
							Registrar empresas. Parte del programa de socios
						</h1>
					</v-container>
					<div class="feature feature-4 pt-7">
						<v-img
							src="@/assets/img/pagami-feature-4.png"
							class="mx-auto"
							eager
							max-width="320"
						>
						</v-img>
					</div>
				</v-col>
				<v-col cols="12" md="6">
					<v-container class="py-5">
						<h1 class="text-center title">
							Transferencia de dinero entre cuentas Pagami
						</h1>
					</v-container>
					<div class="feature feature-5 pt-7">
						<v-img
							src="@/assets/img/pagami-feature-5.png"
							class="mx-auto"
							eager
							max-width="320"
						>
						</v-img>
					</div>
				</v-col>
				<v-col cols="12" md="6">
					<v-container class="py-5">
						<h1 class="text-center title">
							Retiro de fondos a través de PayPal
						</h1>
					</v-container>
					<div class="feature feature-6 pt-7">
						<v-img
							src="@/assets/img/pagami-feature-6.png"
							class="mx-auto"
							eager
							max-width="320"
						>
						</v-img>
					</div>
				</v-col>
			</v-row>
		</v-row>
	</v-container>
</template>

<style>
	.feature {
		background-position: center center;
		background-size: cover;
	}
	.feature-1 {
		background-image: url("../assets/img/map.jpg");
	}
	.feature-2 {
		background-image: url("../assets/img/bench-accounting.jpg");
	}
	.feature-3 {
		background-image: url("../assets/img/shoes.jpg");
	}
	.feature-4 {
		background-image: url("../assets/img/taking-photo.jpg");
	}
	.feature-5 {
		background-color: #3182ce;
	}
	.feature-6 {
		background-color: #2c5282;
	}
</style>
