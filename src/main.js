import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';


let searchBtn = document.querySelector('#search-btn');
let country = document.querySelector('#country');
searchBtn.addEventListener("click", () =>{
    let countryName = country.value;
});