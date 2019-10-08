exports.handler = (event, context, cb) => {
  console.log(event);
  console.log(context);
  cb(null, {
    statusCode: 200
  });
};
