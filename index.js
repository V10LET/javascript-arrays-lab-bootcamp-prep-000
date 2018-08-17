// Add your functions and code here
function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield']
}

function appendKitten(name) {
    return [...kittens, name]
}

function destructivelyAppendKitten(name) {
    kittens.appendKitten(name)
    return kittens
}
