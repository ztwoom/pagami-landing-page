<template>
	<div class="newsletter mt-8">
		<h2 class="font-serif">Suscribete a nuestro boletín informativo</h2>
		<p class="body-1 paragraph--text mt-1">
			y recibe una notificación cuando la aplicación esté lista para Android!
		</p>
		<form @submit.prevent="onSubmit">
			<div class="d-md-flex mt-6">
				<v-text-field
					class="mr-md-3"
					append-icon="mdi-email-outline"
					background-color="surface"
					solo
					color="white"
					flat
					placeholder="Tu correo"
					type="text"
					label="Correo"
					depresed
					:style="{ maxWidth: !smAndUp ? '100%' : '80%' }"
					v-model="newsletterConfigObj.email"
					:disabled="newsletterConfigObj.disabled"
				></v-text-field>
				<v-btn
					elevation="0"
					color="primary"
					class="text-capitalize"
					:block="!smAndUp ? true : false"
					large
					height="48"
					type="submit"
					:loading="newsletterConfigObj.loading"
					>Enviar</v-btn
				>
			</div>
		</form>
		<v-snackbar v-model="snackbar" color="surface" vertical>
			<div class="font-weight-medium">
				{{ msg }}
			</div>
		</v-snackbar>
	</div>
</template>

<script>
	import { validationMixin } from "vuelidate";
	import { required, email } from "vuelidate/lib/validators";

	export default {
		data() {
			return {
				snackbar: false,
				msg: "",
				newsletterConfigObj: {
					email: "",
					disabled: false,
					loading: false
				},
				newsletterConfigObjDefault: {
					email: "",
					disabled: false,
					loading: false
				}
			};
		},
		validations: {
			newsletterConfigObj: {
				email: {
					required,
					email
				}
			}
		},
		mixins: [validationMixin],
		methods: {
			onSubmit() {
				if (!this.$v.newsletterConfigObj.email.email) {
					this.msg = "🤔 Parece un correo no válido";
					this.snackbar = true;
				} else if (!this.$v.newsletterConfigObj.email.required) {
					this.msg = "📭 Ups! Ingresa un correo";
					this.snackbar = true;
				} else {
					this.newsletterConfigObj.disabled = true;
					this.newsletterConfigObj.loading = true;
					this.sent();
				}
			},
			async sent() {
				const req = new Request("/.netlify/functions/subscribeMmber", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ email: this.newsletterConfigObj.email })
				});
				try {
					let res = await fetch(req);
					if (res.ok) {
						let { msg } = await res.json();
						this.msg = msg;
						this.snackbar = true;
						this.clear();
					} else throw await res.json();
				} catch ({ msg }) {
					this.msg = msg;
					this.snackbar = true;
					this.clear();
				}
			},
			clear() {
				this.$v.$reset();
				this.newsletterConfigObj = {
					...this.newsletterConfigObjDefault
				};
			},
			getURLEncodedString(obj) {
				// It encodes key:value pairs and join them in a string
				let encodedString = Object.keys(obj)
					.map(
						key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
					)
					.join("&");
				return encodedString;
			}
		},
		computed: {
			smAndUp() {
				return this.$vuetify.breakpoint.smAndUp;
			}
		}
	};
</script>
