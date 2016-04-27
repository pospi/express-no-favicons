var FAVICON_REGEX = /\/(favicon|(apple-)?touch-icon(-i(phone|pad))?(-\d{2,}x\d{2,})?(-precomposed)?)\.(jpe?g|png|ico|gif)$/i;

module.exports = exports = function() {
  return function(req, res, next) {
    if (FAVICON_REGEX.test(req.url)) {
      res.status(404).end();
    } else {
      next();
    }
  };
};
