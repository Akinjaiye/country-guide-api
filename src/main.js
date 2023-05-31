import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';


let searchBtn = document.querySelector('#search-btn');
let country = document.querySelector('#country');
searchBtn.addEventListener("click", () =>{
    let countryName = 'India';
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(
            Object.values(data[0].languages).toString().split(",").join(",")
        );
        result.innerHTML = `
        <img src="${data[0].flags.svg}"
        class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
            </div>
        </div>
        `;
    });
});