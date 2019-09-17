function getRepositories(){
  const req = new XMLHttpRequest()
  req.open('get', 'https://ghibliapi.herokuapp.com/films', true)
}