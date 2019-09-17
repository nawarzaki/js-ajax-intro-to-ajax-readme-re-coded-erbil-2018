function getRepositories(){
  const req = new XMLHttpRequest()
  req.open('get', 'https://github.com/popcorn-official/popcorn-api.git', true)
  req.send()
}
