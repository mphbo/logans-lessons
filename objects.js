// Objects

const animal = {
  name: "gopher",
  head: "small",
  legs: 4,
  tail: true,
};

// Access items from object => object.key ex) animal.name => 'gopher'

// for in loop

for (let key in animal) {
  console.log(animal[key]);
}
