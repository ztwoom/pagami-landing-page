exports.handler = (event, context, cb) => {
  console.log(event);
  cb(null, {
    headers: { "Access-Control-Allow-Origin": "*" },
    statusCode: 200
  });
};
