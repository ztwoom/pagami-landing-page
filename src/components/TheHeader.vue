<template>
	<v-app-bar color="surface" hide-on-scroll flat app>
		<v-toolbar-title class="d-flex">
			<router-link class="d-flex" to="/">
				<pagami-logo width="100.73" height="25.659" fill="white"></pagami-logo>
			</router-link>
		</v-toolbar-title>
		<div class="flex-grow-1"></div>
		<contact-icons></contact-icons>
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
	import ContactIcons from "@/components/ContactIcons.vue";

	export default {
		components: {
			PagamiLogo,
			ContactIcons
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
