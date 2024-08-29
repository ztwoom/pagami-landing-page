<template>
	<div>
		<v-btn icon href="mailto:pagami.net@gmail.com" :large="large">
			<v-icon>{{ mdiEmailOutline }}</v-icon>
		</v-btn>
		<v-btn icon href="tel:+584129179124" :large="large">
			<v-icon>{{ mdiPhoneOutline }}</v-icon>
		</v-btn>
		<v-btn icon href="https://wa.me/584129179124" :large="large">
			<v-icon>{{ mdiWhatsapp }}</v-icon>
		</v-btn>
	</div>
</template>

<script>
	import { mdiEmailOutline, mdiPhoneOutline, mdiWhatsapp } from "@mdi/js";
	export default {
		data() {
			return {
				mdiEmailOutline,
				mdiPhoneOutline,
				mdiWhatsapp
			};
		},
		props: {
			large: {
				type: Boolean,
				default: false
			}
		}
	};
</script>
