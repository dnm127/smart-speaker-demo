module.exports.getInput = function (self, inputName) {
  return self.$input.entities[inputName].resolved ? self.$input.entities[inputName].resolved : '';
};
