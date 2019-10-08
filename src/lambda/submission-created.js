exports.handler = (event, context, cb) => {
  console.log(event.body);
  cb(null, {
    statusCode: 200
  });
};
