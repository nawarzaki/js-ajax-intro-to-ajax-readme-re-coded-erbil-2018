
function getRepositories() {
  const req = new XMLHttpRequest()
  req.open('GET', 'https://ghibliapi.herokuapp.com/films')
  req.send()
}
