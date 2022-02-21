enum Color1 {
  red,
  green,
  blue
}

console.log(Color1.green)

// ---------------

enum Color2 {
  yellow = 8,
  red = 4,
  green,
  blue
}

console.log(Color2.green)

// ---------------------

enum Color3 {
  red = 'red',
  green = 'green',
  blue = 'blue'
}

console.log(Color3.green)

// ---------------------

enum Color4 {
  red = 'red',
  green = 'green',
  blue = 3,
  black,
  yellow = 8,
}