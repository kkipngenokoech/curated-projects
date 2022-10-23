import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'

// the business logic
function getWeather(city){
    let request = new XMLHttpRequest()
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=process.end.API_KEY`
    request.addEventListener('loadend', function (){
        const response = JSON.parse(this.responseText)
        if (this.status === 200) {
            printElements(response, city)
        }
    })
    request.open('GET', url, true)
    request.send()
}

// UI logic
function printElements(apiResponse, city){
    document.querySelector('#showResponse').innerHTML = `The humidity in ${city}, is ${apiResponse.main.humidity}%
    The temperature in kelvin is ${apiResponse.main.temp} degrees.`

}

function handleFormSubmission (event){
    event.preventDefault()
    const city = document.querySelector('#location').value
    document.querySelector('#location').value = null
    getWeather(city)
}

window.addEventListener('load', function()
{
    document.querySelector('form').addEventListener('submit', handleFormSubmission)
})