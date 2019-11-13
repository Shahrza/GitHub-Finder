class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-4"> View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary m-2">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary m-2">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-danger m-2">Followers: ${user.followers}</span>
        <span class="badge badge-info m-2">Following: ${user.following}</span>
        <ul class="list-group mt-4">
          <li class="list-group-item">Company: ${user.company}
          <li class="list-group-item">Website/ Blog: <a href="http://${user.blog}">${user.blog}</a>
          <li class="list-group-item">Location: ${user.location}
          <li class="list-group-item">Since: ${user.created_at}
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading">Latest Repos</h3>
  <div id="repos"></div>
    `;
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showRepos(repos) {
    let output = "";
    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary m-2">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary m-2">Watchers: ${repo.watchers}</span>
            <span class="badge badge-danger m-2">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>      `;
    });

    document.getElementById("repos").innerHTML = output;
  }
}
