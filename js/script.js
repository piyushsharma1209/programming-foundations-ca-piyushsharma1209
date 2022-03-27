// Question 1 

function isBoolean(value) {
    if (typeof value === "boolean") {
        console.log("Out of stock");
    } else console.log("In Stock");
}

isBoolean(1);
isBoolean(true);

// Question 2

for (var i = 15; i <= 25; i++) {
    if (i == 17 || i == 20) {
        console.log(i);
    }
}

// Question 3

var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    }
];

var gamesContainer = document.querySelector("ul");


for (var i = 0; i < games.length; i++) {

    var rating = games[i].rating;
    var title = games[i].title;

    if (rating != null && rating < 3.5) {
        gamesContainer.innerHTML += "<li>" + games[i].title + " - " + games[i].rating + "</li>";
    }
}


// Question 4

function whatIDontLike(value) {
    if (typeof value === "string") {
        console.log("I don't like " + value);
    } else console.log("Please send in a string");
}

whatIDontLike("giraffes");
whatIDontLike(true);
whatIDontLike(50);
whatIDontLike(null);

// Question 6

var head = document.querySelector("title");
var heading = document.querySelector("h1");
var buttonPage = document.querySelector(".page");
var body = document.querySelector("body");

function changePage() {
    head.innerHTML = "Updated Title";
    body.style.backgroundColor = "yellow";
    heading.style.color = "green";
    heading.style.fontFamily = "impact";
    heading.value = document.createElement("a");
}

buttonPage.onclick = changePage;


// Question 7

var toys = [
    {
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    },
];

for (var i = 0; i < toys.length; i++) {


}

