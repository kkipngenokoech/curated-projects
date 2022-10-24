console.log("hey")
const form = document.getElementById('city')
const answer = document.getElementById('paste-answer')
const data = fetch('https://api.openweathermap.org/data/2.5/weather?q=portland&appid=16a1d419a4a58e105102ab0e9926f057', {mode: 'cors'})
.then(function(response){
    answer.innerHTML = response.json()
})
