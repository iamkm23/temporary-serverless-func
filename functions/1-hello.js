// domain/.netlify/functions/1-hello

// const person = {
//   name: "john",
//   age: 34
// };

// exports
exports.handler = async (event, context, cb) => {
  //   console.log(event);
  //   console.log(context);
  return {
    statusCode: 200,
    body: "Hello World, Our First Netlify Function Example",
  };
};

// exports
// exports.handler = (event, context, cb) => {
//   cb(null, { statusCode: 200, body: "hello" });
// };
