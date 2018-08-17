// Add your functions and code here
function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function prependKitten(name) {
  return [name, ...kittens]
}

function appendKitten(name) {
  return [...kittens, name]
}
