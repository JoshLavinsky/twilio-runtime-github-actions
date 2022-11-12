exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Josh's World!"
    }

    callback(null, result);
  };
