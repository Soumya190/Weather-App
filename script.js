let button1 = document.querySelector('button');
let input = document.querySelector('input');
let heading = document.querySelector('h1');
// input.addEventListener('click',func);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d0255d077msh281d201413f7e7bp17e4a8jsn40fa74cd2e2f',
    	'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}

function getweatherdata(city){
    city.value = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        console.log(response);
        heading.innerText="Weather for "+city;
        para4.innerText = "Sun rise :" +response.sunrise;
        para4.nextElementSibling.innerText = "Sun Set : " + response.sunset;
        para1.innerText = "Min Temperature : " + response.min_temp;
        para1.nextElementSibling.innerText = "Max Temperature : " + response.max_temp;
        para2.innerText = "Humidity : " + response.humidity;
        para3.innerText= "Wind speed :" + response.wind_speed;
        para3.nextElementSibling.innerText= "Wind degrees :" + response.wind_degrees;
    })
}

let para4 = document.body.childNodes[1].children[2].children[3].children[2]
let para1 = document.body.childNodes[1].children[2].children[0].children[2]
let para2 = document.body.childNodes[1].children[2].children[1].children[2]
let para3 = document.body.childNodes[1].children[2].children[2].children[2]


button1.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(getweatherdata(city.value));
});

