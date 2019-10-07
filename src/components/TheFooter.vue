<template>
	<v-container class="mt-12" tag="footer">
		<v-row no-gutters>
			<v-col cols="12" md="6" offset-md="3">
				<app-newsletter></app-newsletter>
			</v-col>
			<v-col class="text-center mt-12" cols="12">
				<contact-icons large></contact-icons>
				<div class="my-12 d-flex justify-center align-center">
					<pagami-logo
						class="footer__logo paragraph--text"
						fill="currentColor"
					></pagami-logo>
					<div class="overline font-weight-bold paragraph--text ml-2">
						2019
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import AppNewsletter from "@/components/AppNewsletter.vue";
	import ContactIcons from "@/components/ContactIcons.vue";
	import PagamiLogo from "@/assets/svg/pagami-logo.svg";
	export default {
		components: {
			AppNewsletter,
			ContactIcons,
			PagamiLogo
		}
	};
</script>

<style>
	.footer__logo {
		width: 4rem;
	}
</style>
