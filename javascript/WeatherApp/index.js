console.log("hey")
const answer = document.getElementById('paste-answer')
const city = "cairo"
const submit = document.getElementById('button-submit')
submit.addEventListener('click', function (){
    const inputCity = document.getElementById('city').value
    console.log(inputCity)
})
// const data = fetch('https://api.openweathermap.org/data/2.5/weather?q=portland&appid=[]', {mode: 'cors'})
// .then(function(response){
//     answer.innerHTML = response.json()
// })

const dataInputs = async()=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API_KEY`);
    console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        answer.innerHTML = response
    }
    
    dataInputs();
