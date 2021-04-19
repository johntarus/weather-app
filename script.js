const api = {
    key: '040c6d66a21b3a395a971803eeef2ecb',
    base: 'https://api.openweathermap.org/data/2.5/'
}

//getting elements
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
btn.addEventListener('click', getInput);
//getInput function
function getInput() {
    if (event.type == 'click') {
        getData(search.value);
    }
}
function getData() {
    console.log(search.value);
}

//fetch data from openweathermap api
function getData(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((Response) => {
            return Response.json();
        })
        .then(result)
        .catch(function(error) {
            console.log('Fetch Error:', error);
             });
}

//result function
function result(Response) {
    let city = document.querySelector('.location .city');
    city.innerHTML = `${Response.name}, ${Response.sys.country}`;

    //date
    let date = document.querySelector('.location .date');
    let currentDate = new Date();
    date.innerHTML = dateBuilder(currentDate);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(Response.main.temp)} <span>°C</span>`

    let weather1 = document.querySelector('.current .weather');
    weather1.innerText = Response.weather[0].main;

    let tempRange = document.querySelector('.current .temp-range');
    tempRange.innerText = `${Math.round(Response.main.temp_min)}°C / ${Math.round(Response.main.temp_max)}°C`;
}

function dateBuilder(d) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    let time = d.getTime();
    let day = days[d.getDay() - 1];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${time}, ${date}, ${day}, ${month}, ${year}`;
}


    



// let apiKey = "161ac2eab35dd817f361a994174407d7";
// const api = {
//     key: "161ac2eab35dd817f361a994174407d7",
//     base: "https://home.openweathermap.org/api_keys"
// }
// //search
// const search = document.querySelector('.search');
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', getInput);
// //function
// function getInput(event) {
//     event.preventDefault();
//     if (event.type == 'click') {
//         getData(search.value);
//         console.log(search.value);
//     }
// }
// //getData function 
// function getData(cityName) {
//     fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityName+ '&appid=' + api)
//         .then(function (response) {
//             response.json()
//                 .then(function (data) {
//         console.log(data)
//     });
// }).catch(function(error) {
//     console.log('Fetch Error:', error);
// });
// }