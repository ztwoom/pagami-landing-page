<template>
	<div>
		<the-header></the-header>
		<v-content>
			<value-proposition></value-proposition>
			<for-business></for-business>
			<app-features></app-features>
			<app-pricing></app-pricing>
			<the-footer></the-footer>
		</v-content>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader.vue";
	import ValueProposition from "@/components/ValueProposition.vue";
	import ForBusiness from "@/components/ForBusiness.vue";
	import AppFeatures from "@/components/AppFeatures.vue";
	import AppPricing from "@/components/AppPricing.vue";
	import TheFooter from "@/components/TheFooter.vue";
	export default {
		components: {
			TheHeader,
			ValueProposition,
			ForBusiness,
			AppFeatures,
			AppPricing,
			TheFooter
		}
	};
</script>
