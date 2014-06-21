module.exports = function (val) {
  return val.replace(/([A-Z])/g, function(str) {
    return '-' + str.toLowerCase();
  });
};
