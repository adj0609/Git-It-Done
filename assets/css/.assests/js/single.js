var repoNameE1 = document.querySelector("repo-name");
var issueContainerE1 = document.querySelector("issues-container");
var limitWarningE1 = document.querySelector("limit-warning");

var getRepoIssues = function(repo) {
    //format the github api url
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

    // make a get request to url
    fetch(apiUrl).then(function(response) {
        //request was succesful
        if (response.ok) {
            response.json().then(function(data) {
                displayIssues(data);
            //check if api has paginated issues
            if(response.headers.get("link")) {
                displayWarning(repo);
            }
        });
    }
    else {
        console.log(response);
        alert("There was a problem with your request!");
         }
    });
};
var displayIssues = function(issues) {
    if (issues.length === 0) {
        issueContainerE1.textContent = "This repo has no open issues!";
        return;
    }
    //loop over given issues
    for (var i = 0; i < issues.length; i++) {

    //create a link element to take users to the issue on github
    var issueE1 = document.createElement("a");
    issueE1.classList = "list-item flex-row justify-space-between align-center"
    issueE1.setAttribute("href", issues[i].html_url);
    issueE1.setAttribute("target", "_blank");

    //create span to hold issue title
    var titleE1 = document.createElement("span");
    titleE1.textContent = issues[i].title;

    // append to container
    issueE1.appendChild(titleE1);

    //create a type element
    var typeE1 = document.createElement("span");

    //check if issue is an actual issue or a pull request
    if (issues[i].pull_request) {
        typeE1.textContent = "(Pull request)";
    }
    else{
        typeE1.textContent = "(issue)";
    }

    //append to container
    issueE1.appendChild(typeE1);

    // append to the dom
    issueContainerE1.appendChild(issueE1);
    }
};

var displayWarning = function(repo) {
    // add text to warning container
    limitWarningEl.textContent = "To see more than 30 issues, visit ";
  
    // create link element
    var linkEl = document.createElement("a");
    linkEl.textContent = "GitHub.com";
    linkEl.setAttribute("href", "https://github.com/" + repo + "/issues");
    linkEl.setAttribute("target", "_blank");
  
    // append to warning container
    limitWarningEl.appendChild(linkEl);
  };
  
  getRepoIssues("facebook/react");
    