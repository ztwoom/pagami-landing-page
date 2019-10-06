<template>
	<v-container class="mt-10 pa-0" tag="section" fluid>
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
</style>
