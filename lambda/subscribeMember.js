const Mailchimp = require("mailchimp-api-v3");
const mp = new Mailchimp(process.env.MP_API_KEY);

exports.handler = async (evt, context) => {
  let { email } = JSON.parse(evt.body);

  try {
    let { statusCode, email_address } = await mp.post("/lists/50afccf669/members", {
      email_address: email,
      status: "pending"
    });
    if (statusCode === 200)
      return {
        body: JSON.stringify({
          msg: `🙌 Listo! Te hemos enviado un correo de confirmación a ${email_address}`
        }),
        statusCode
      };
  } catch ({ status, title }) {
    return {
      body: JSON.stringify({ msg: "💥 Hubo un error guardando el correo" }),
      statusCode: status
    };
  }
};
