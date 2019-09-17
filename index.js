function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.title +
        ' - <a href="#" data-repo="' +
        r.title +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener('load', 'showRepositories')
  req.open('GET', 'https://ghibliapi.herokuapp.com/films')
  req.send()
}
