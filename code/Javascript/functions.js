function openFile(location) {
    window.location = location;
}

function showMenu() {
    var navbar = document.querySelector("nav>div");
    navbar.classList.toggle("show");
}

function hideMenu() {
    var navbar = document.querySelector("nav>div");
    navbar.classList.toggle("show");
}
/**
 * toggles the submenus in Mobile view
 * @param {Element} element 
 */
function toggleSubMenu(element) {
    console.log(element);
    element.classList.toggle("show");
}
var grades = [{
        "Key": "Nederlands",
        "Grade": 6
    }, {
        "Key": "Rekenen",
        "Grade": 6.9
    },
    {
        "Key": "Engels",
        "Grade": 6.7
    },
    {
        "Key": "Html",
        "Grade": 8.7
    },
    {
        "Key": "Javascript",
        "Grade": 9.4
    },
    {
        "Key": "Usability",
        "Grade": 7.0
    },
    {
        "Key": "Hardware",
        "Grade": 6.6
    },
    {
        "Key": "Computertekenen",
        "Grade": 7
    },
    {
        "Key": "Burgerschap",
        "Grade": 5.5
    },
    {
        "Key": "Vaardigheden",
        "Grade": 8.1
    }
];
/**
 * shows the grade of a vak
 * @param {Element} element 
 * @param {string} vak
 */
function showGrade(element, vak) {
    element.parentElement.nextElementSibling.firstElementChild.innerHTML = FindVak(vak).toFixed(1);
    element.parentElement.nextElementSibling.firstElementChild.style.display = "block";
}

function FindVak(vak) {
    for (var i = 0; i < grades.length; i++) {
        if (grades[i].Key == vak) {
            return grades[i].Grade;
        }
    }
}