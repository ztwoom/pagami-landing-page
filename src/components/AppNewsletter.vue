<template>
	<div class="newsletter mt-8">
		<h2 class="font-serif"> Con Pagami, encontraras todo lo que necesitas en productos y servicios</h2>
		<p class="body-1 paragraph--text mt-1">
			Te ofrecemos un directorio comercial interactivo para realizar pedidos a domicilio y solicitar los servicios mas cercanos a tu ubicación geográfica
		</p>
			<div class="d-md-flex mt-6">
      <a href="https://play.google.com/store/apps/details?id=io.ionic.pagami&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img width="250" alt="Disponible en Google Play" src="https://play.google.com/intl/es-419/badges/static/images/badges/es-419_badge_web_generic.png"/>
      </a>
			</div>
		</form>

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
				const req = new Request("/.netlify/functions/subscribeMember", {
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
