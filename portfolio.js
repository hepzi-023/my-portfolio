

// Toggle dropdown on hamburger menu click
document.getElementById("hamburger-menu").addEventListener("click", function () {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
});

// Hide dropdown when a link is clicked
const dropdownLinks = document.querySelectorAll(".dropdown-content a");
dropdownLinks.forEach(link => {
    link.addEventListener("click", function () {
        var dropdownContent = document.getElementById("dropdown-content");
        dropdownContent.classList.remove("show"); // Hide the menu after clicking a link
    });
});


var projectButtons = document.querySelectorAll(".project-number");
for (var i=0; i<projectButtons.length; i++) {
    projectButtons[i].addEventListener('click', displayProject);
}

function displayProject() {
    var btnNumber = this.innerHTML;
    document.getElementById('project-pic').src = './images/project-' + btnNumber + '.png';

    switch(btnNumber) {
        case '1':
            document.querySelector('.project-title').innerHTML = 'Online Bookstore Website';
            document.querySelector('.project-description').innerHTML = 'An e-commerce platform designed to allow users to browse, search, and purchase books online. Features include a user-friendly interface, categorized book listings, and secure checkout options.';
            break;

        case '2':
            document.querySelector('.project-title').innerHTML = 'Online Music Shop Website';
            document.querySelector('.project-description').innerHTML = 'A digital marketplace for music enthusiasts to discover, preview, and purchase their favorite tracks and albums. Features include a catalog of music, search options, a shopping cart, and integration with payment gateways.';
            break;

        case '3':
            document.querySelector('.project-title').innerHTML = 'Top 5 Movie Ranking Website';
            document.querySelector('.project-description').innerHTML = 'A dynamic website that showcases the top 5 movies based on user ratings and reviews. Includes detailed movie profiles, ratings, user reviews, and real-time ranking updates.';
            break;

        case '4':
            document.querySelector('.project-title').innerHTML = 'Pharmacy Website';
            document.querySelector('.project-description').innerHTML = 'An online platform for a pharmacy to offer medical supplies and prescription medications. Features include a searchable catalog, prescription upload, secure ordering system, and customer support options.';
            break;

        default:
            document.querySelector('.project-title').innerHTML = 'Select a Project';
            document.querySelector('.project-description').innerHTML = 'Please select a project to view the details.';
            break;
    }
}
