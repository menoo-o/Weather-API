const dateElement = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');
const app = document.getElementById('app')
const searchBtn = document.getElementById('searchIcon')


const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getFullYear();
dateElement.innerHTML = `${month} ${day}, ${year}`;




const getWeather = async () =>{
    try {

        const citiesCoordinates = [
            [33.6844, 73.0479], // Islamabad
            [24.8607, 67.0011], // Karachi
            [31.5497, 74.3436], // Lahore
            [34.0151, 71.5249], // Peshawar
            [30.1575, 71.5249], // Multan
            [25.3960, 68.3578], // Hyderabad
            [31.5820, 74.3294], // Faisalabad
            [28.4142, 70.2952], // Bahawalpur
            [34.1748, 73.2215], // Abbottabad
            [32.1877, 74.1945]  // Sialkot
          ];
        
        const randomCity = citiesCoordinates[Math.floor(Math.random()* citiesCoordinates.length)]
        
        
        const lat = randomCity[0];
        const lon = randomCity[1];
        const apiKey = 'c3f889242c2796d667dcc68d02c4f357';
        
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        // const cityName = document.getElementById('searchBarInput').value;
        const weatherDataFetch = await fetch(apiUrl, {
            headers:  {
                Accept:'application/json'
           }
        });
        const weatherData = await weatherDataFetch.json();
        console.log(weatherData);
        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].description}`
        tempImg.innerHTML = `<img src='http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png' />`
        temp.innerHTML = `<h2> ${Math.round(weatherData.main.feels_like/10)}°C </h2>`
        tempMax.innerHTML = `<h3> ${Math.round(weatherData.main.temp_max/10)}°C </h3>`
        tempMin.innerHTML = `<h3> ${Math.round(weatherData.main.temp_min/10)}°C </h3>`
    }   
    catch (err){
        console.log(err);
    }
}


//why the search btb clicks only once?

searchBtn.addEventListener('click', getWeather) 