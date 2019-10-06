<template>
	<v-app-bar color="surface" hide-on-scroll flat app>
		<v-toolbar-title class="d-flex">
			<pagami-logo></pagami-logo>
		</v-toolbar-title>
		<div class="flex-grow-1"></div>
		<v-btn icon href="mailto:pagami@gmail.com">
			<v-icon>{{ mdiEmailOutline }}</v-icon>
		</v-btn>
		<v-btn icon href="tel:123123123">
			<v-icon>{{ mdiPhoneOutline }}</v-icon>
		</v-btn>
		<v-btn icon href="https://wa.me/123123">
			<v-icon>{{ mdiWhatsapp }}</v-icon>
		</v-btn>
		<template #extension>
			<v-tabs
				background-color="surface"
				center-active
				color="white"
				show-arrows
				optional
			>
				<v-toolbar-items>
					<v-tab>
						<v-btn text class="text-capitalize" href="#empresas" :ripple="false"
							>Empresas</v-btn
						>
					</v-tab>
					<v-tab class="text-capitalize">
						<v-btn
							text
							class="text-capitalize"
							href="#caracteristicas"
							:ripple="false"
							>Características</v-btn
						>
					</v-tab>
					<v-tab class="text-capitalize">
						<v-btn text class="text-capitalize" href="#precios" :ripple="false"
							>Precios</v-btn
						>
					</v-tab>
				</v-toolbar-items>
			</v-tabs>
		</template>
	</v-app-bar>
</template>

<script>
	import PagamiLogo from "@/assets/svg/pagami-logo.svg";
	import { mdiEmailOutline, mdiPhoneOutline, mdiWhatsapp } from "@mdi/js";

	export default {
		data() {
			return {
				mdiEmailOutline,
				mdiPhoneOutline,
				mdiWhatsapp
			};
		},
		components: {
			PagamiLogo
		},
		methods: {
			onTabChange(val) {
				console.log(val);
			}
		}
	};
</script>

<style scoped>
	.v-tab > .v-btn::before {
		opacity: 0 !important;
	}
</style>
