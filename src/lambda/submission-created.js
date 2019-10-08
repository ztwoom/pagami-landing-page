exports.handler = (event, context, cb) => {
  let payload = JSON.parse(event.body).payload;
  console.log(payload);
  cb(null, {
    statusCode: 200
  });
};
