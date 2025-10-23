// Create the student object
const student = {
  name: "John",
};

// Add getKeys method to all objects
Object.prototype.getKeys = function() {
  return Object.keys(this);
};
