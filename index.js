// Add your functions and code here
function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyAppendKitten(name) {
    name.slice(kittens)
    return kittens
}

function appendKitten(name) {
    return [...kittens, name]
}
