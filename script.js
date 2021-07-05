'use strict';

window.onload = function() {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => dataReady(data))
}

function dataReady(data) {
    console.log(data);

    const randomUser = data.results[0];

    let image = randomUser.picture.large;
    document.querySelector(".image").src = image;

    let fullName =
        randomUser.name.title + " "
        + randomUser.name.first + " "
        + randomUser.name.last;
    document.querySelector(".fullName").innerText = fullName;

    let username = randomUser.login.username;
    document.querySelector(".username").innerText = username;

    let email = randomUser.email;
    document.querySelector(".email").innerText = email;

    let country = randomUser.location.timezone.description;
    document.querySelector(".country").innerText = country;
}

