//weak set gets garbage selected
//weak map cannot be looped or counted
// the will get garbabe collected

//  reg map vs weak map
const dog1 = { name: "pixie" };
const dog2 = { name: "brandy" };

const strong = new Map();
const weak = new WeakMap();

strong.set(dog1, "Pixie is the best");
weak.set(dog2, "Brandy is the 2nd best");
