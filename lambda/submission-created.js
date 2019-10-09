const Mailchimp = require("mailchimp-api-v3");
const mp = new Mailchimp(process.env.MP_API_KEY);

exports.handler = async (evt, context) => {
  // let { email } = JSON.parse(evt.body).payload;
  let payload = JSON.parse(evt.body).payload;
  console.log("payload", payload);
  return {
    body: JSON.stringify(payload),
    statusCode: 200
  };
  // try {
  //   const list = await mp.post("/lists/50afccf669/members", { email, status: "pending" });
  //   return {
  //     body: JSON.stringify(list),
  //     statusCode: 200
  //   };
  // } catch (error) {
  //   return {
  //     body: error,
  //     statusCode: 400
  //   };
  // }
};
