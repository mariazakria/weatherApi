let mobileNav = document.querySelector(".mobile-nav");
let toggleBtn = document.querySelector(".toggle");
let btnFind = document.querySelector("#btnFind");
let inputFind = document.querySelector("#inputFind")
let apiKey = 'ffcf0e5539474e6aa5b195946241110'; 

async function getData(city) {
    let result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`);
    let data = await result.json();   
    return data;
}
// dh default lma elpage t3ml refresh
document.addEventListener("DOMContentLoaded", async () => {
    let defaultCity = "Giza"; 
    let data = await getData(defaultCity);
    displayData(data);
});

// 3shan hmn3 y3ml refresh lma a3ml enter
inputFind.addEventListener("keypress", async function(event){
    // lw dost enter my3mlsh refresh
    if(event.key === "Enter"){
        event.preventDefault();
    }
    let city = inputFind.value.toUpperCase();
    if(city){
        try{
            
            let data = await getData(city);
            displayData(data); 
            
        }
        catch{
            console.log("error❌")
        }
    }else {
        console.log("Please enter a city name");
    }
   

})
btnFind.addEventListener("click", async function(){
   
    let city = inputFind.value.toUpperCase();
    if(city){
        try{
            
            let data = await getData(city);
            displayData(data); 
            
        }
        catch{
            console.log("error❌")
        }
    }else {
        console.log("Please enter a city name");
    }
   

})

function displayData(data){
    let weatherData = document.querySelector(".row")
    let details = ``;
    details += `
     <div class=" col-lg-4  col1">
                          <div class="title d-flex justify-content-between align-items-center px-3 pt-2">
                           <p class="m-0">${ new Date(data.forecast.forecastday[0].date).toLocaleString('en-us', { weekday: 'long' })}</p>
                           <p class="m-0">${ new Date(data.forecast.forecastday[0].date).getDate() } ${ new Date(data.forecast.forecastday[0].date).toLocaleString('en-us', { month: 'long' })}</p>

                          </div>
                          <div class="info px-3 me-3 ">
                             <p class="country">${data.location.name}</p>
                             <p class="d-flex align-items-end">
                                <span>${data.current.temp_c}°c</span>
                                <img src="${data.current.condition.icon}" alt="">
                             </p>
                             <p class="status">${data.current.condition.text}</p>
                             <div class="icons d-flex align-items-center pb-2">
                                <div class="d-flex align-items-start pe-2">
                                   <i class="fa-solid fa-umbrella pe-1 fs-5"></i> 
                                   <p>20%</p>
                                </div>
                                <div class="d-flex align-items-start pe-2">
                                   <i class="fa-solid fa-wind pe-1 fs-5"></i> 
                                   <p>18km/h</p>
                                </div>
                                <div class="d-flex align-items-start pe-2">
                                   <i class="fa-solid fa-gauge pe-1 fs-5"></i> 
                                   <p>East</p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class="  col-lg-4 text-center col2">
                          <div class="title text-center d-flex justify-content-center align-items-baseline " style="    padding-top: .59rem !important;">
                                                       <p >${ new Date(data.forecast.forecastday[1].date).toLocaleString('en-us', { weekday: 'long' })}</p>

                          </div>
                          <img src="https:${data.forecast.forecastday[1].day.condition.icon}" width="70px" height="70px" class="mt-4 mb-4">
                          <p class="deg">${data.forecast.forecastday[1].day.maxtemp_c}°c</p>
                          <p class="deg2">${data.forecast.forecastday[1].day.mintemp_c}°c</p>
                          <p class="status">${data.forecast.forecastday[1].day.condition.text}</p>
                       </div>
                       <div class="  col-lg-4 text-center col2" style="    background-color: #323544;">
                          <div class="title text-center d-flex justify-content-center align-items-baseline " style="    padding-top: .59rem !important;">
                                                       <p >${ new Date(data.forecast.forecastday[2].date).toLocaleString('en-us', { weekday: 'long' })}</p>
                          </div>
                          <img src="https:${data.forecast.forecastday[2].day.condition.icon}" width="70px" height="70px" class="mt-4 mb-4">
                          <p class="deg">.${data.forecast.forecastday[2].day.maxtemp_c}°c</p>
                          <p class="deg2">${data.forecast.forecastday[2].day.mintemp_c}°c</p>
                          <p class="status">${data.forecast.forecastday[2].day.condition.text}</p>
                       </div>
    `
    weatherData.innerHTML = details;

}











toggleBtn.addEventListener("click",function(){
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    }
    else {
        mobileNav.style.display = "block";
    }


});

