<template>
	<div>
		<the-header></the-header>
		<v-content>
			<value-proposition></value-proposition>
			<for-business></for-business>
			<app-features></app-features>
		</v-content>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader.vue";
	import ValueProposition from "@/components/ValueProposition.vue";
	import ForBusiness from "@/components/ForBusiness.vue";
	import AppFeatures from "@/components/AppFeatures.vue";
	export default {
		components: {
			TheHeader,
			ValueProposition,
			ForBusiness,
			AppFeatures
		}
	};
</script>
