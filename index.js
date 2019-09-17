function getRepositories(){
  const req = new XMLHttpRequest()
  req.open('get', 'https://tv-v2.api-fetch.website/movie/{imdb_id}', true)
  req.send()
  console.log(this.responseText);
}
