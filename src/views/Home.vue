<template>
	<div>
		<the-header></the-header>
		<v-content>
			<value-proposition></value-proposition>
		</v-content>
	</div>
</template>

<script>
	import TheHeader from "@/components/TheHeader.vue";
	import ValueProposition from "@/components/ValueProposition.vue";
	export default {
		components: {
			TheHeader,
			ValueProposition
		}
	};
</script>
