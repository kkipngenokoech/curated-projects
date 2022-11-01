console.log("hey")
// require('dotenv').config()
// const API_KEY = process.env.API_KEY
const API_KEY = "16a1d419a4a58e105102ab0e9926f057"
const answer = document.getElementById('paste-answer')
let city = ""
const submit = document.getElementById('button-submit')
const geo_location = document.createElement('div')
const weather_conditions= document.createElement('div')
const data = (city) => 
{ 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(function(response){
        console.log("we've got your data")
        return response.json()})
        .then (function (data){
            console.log("successfully retrieved")
            console.log(data)
            // data = JSON.stringify(data)
            geo_location.innerHTML =`city: ${data.name} <br>longitude: ${data.coord.lon} <br> latitude: ${data.coord.lat}`
            
            answer.appendChild(geo_location)
            console.log(data.coord)
            // console.log(returned_data[0])
            return data
        })
    }
    //let city_data
    const findWeather =() => {
        city = document.getElementById('city').value
        city_data  = data(city,API_KEY)
    }
    
    //console.log(city_data)

// API_KEY = "16a1d419a4a58e105102ab0e9926f057"
// const dataInputs = async()=>{
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16a1d419a4a58e105102ab0e9926f057`);
//     console.log(response);
    //     const responseData = await response.json();
    //     console.log(responseData);
    //     answer.innerHTML = responseData
    // 
//}
    
    // dataInputs();
