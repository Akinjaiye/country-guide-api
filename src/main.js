import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';


let searchBtn = document.querySelector('#search-btn');
let country = document.querySelector('#country');
searchBtn.addEventListener("click", () =>{
    let countryName = country.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    
});