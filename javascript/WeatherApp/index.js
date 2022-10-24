console.log("hey")
const form = document.getElementById('city')
const answer = document.getElementById('paste-answer')
const data = fetch('https://api.openweathermap.org/data/2.5/weather?q=portland&appid=[]', {mode: 'cors'})
.then(function(response){
    answer.innerHTML = response.json()
})
