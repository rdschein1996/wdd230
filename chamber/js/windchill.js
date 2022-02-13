const weatherIcon = document.querySelector(".weatherIcon")
const iconDesc = document.querySelector(".iconDesc")
const localtemp = document.querySelector(".temp")
const wSpeed = document.querySelector(".windSpeed")
const wChill = document.querySelector(".windChill")

let apiInfo = "https://api.openweathermap.org/data/2.5/weather?q=Shoshone,ID,USA&units=imperial&APPID=da28ef0488cf8a1538d20c2db5897dd8"

let data, newTemp, speed;

async function getWeather() {
    const response = await fetch(apiInfo);
    data = await response.json()

    return data

}    

function fillData(){
    newTemp = data['main']['temp']
    speed = data['wind']['speed']

    let currentTemp = Math.round(newTemp)
    localtemp.textContent += `${currentTemp}`;

    let currentspeed = Math.round(speed)
    wSpeed.textContent = `${currentspeed} mph`

    return newTemp, speed
    }

function getIconDesc() {
    let icon = data['weather'][0]['icon'];
    let desc = data['weather'][0]['description'];

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = `open weather map API icon: ${desc}`;
    iconDesc.textContent = desc.toUpperCase()
} 

function calculateWindChill() {
    if (newTemp <= 50 && speed > 3.0) {
        let chill = 35.74 + (0.6215*newTemp) - (35.75*speed**0.16) + (0.4275*newTemp*speed**0.16)
        chill = Math.round(chill)
        wChill.innerHTML = `Feels like ${chill}&#176;F`
    }else {
        wChill.textContent = `N/A`
    }
    }
  
getWeather().then(fillData).then(getIconDesc).then(calculateWindChill);







