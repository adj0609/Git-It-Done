var getUsersRespos = function(user) {
    // format the github api url
var apiurl = "https://api.github.com/users/" + user + "/repos";

    //make a request to the url
fetch(apiUrl).then(function(response) {    response.json().then(function(data) {
    response.json().then(function(response) {   
        console.log(data);
        });
    });
});
console.log("outside");
}
var userFormE1 = document.querySelector("#user-form");
var nameInputE1 = document.querySelector("#user-name");
var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
};

userFormE1.addEventListener("submit", formSubmitHandler);
