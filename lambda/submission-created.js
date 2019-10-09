const Mailchimp = require("mailchimp-api-v3");
const mp = new Mailchimp(process.env.MP_API_KEY);

exports.handler = async (evt, context) => {
  // let { email } = JSON.parse(evt.body).payload;
  let data = JSON.parse(evt.body);
  console.log("payloaddddd", data);
  // return {s
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
