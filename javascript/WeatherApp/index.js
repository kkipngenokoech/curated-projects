console.log("hey")
const answer = document.getElementById('paste-answer')
const city = "cairo"
const submit = document.getElementById('button-submit')
submit.addEventListener('click', function (){
    const inputCity = document.getElementById('city').value
    console.log(inputCity)
})
const data = () => 
{ 
    fetch('https://api.openweathermap.org/data/2.5/weather?q=portland&appid=16a1d419a4a58e105102ab0e9926f057')
    .then(function(response){
        console.log("we've got your data")
    return response.json()})
    .then (function (data){
        console.log("successfully retrieved")
        console.log(data)
        return data
    })
}
const city_data = data()
console.log(city_data.coord[0])
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
