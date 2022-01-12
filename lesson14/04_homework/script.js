// task 1 --------------------
let a = 4;
if (a == 4) {
  console.log(a);
}
const cities = {
  472045: "Voronezh",
  2524758: "Filadelfia",
  5190089: "Fort Washington",
  4899170: "Zurich",
  5128581: "New York",
  7285212: "Bern",
}

const param = {
  "url": "https://api.openweathermap.org/data/2.5/",
  "appid": "aefe256a67ff1d035e61af7fd01cf587"
}

let selectElement = document.createElement('select');
selectElement.id = 'city';
let selectOption = '';
for (let key in cities) {
  selectOption = document.createElement('option');
  let out = '';
  let out2 = '';
  for (let i = 0; i < cities[key].length; i++) {
    selectElement.appendChild(selectOption);
    out = key;
    out2 = cities[key];
    console.log(key + '->' + cities[key]);
  }

  selectOption.value = out;
  selectOption.innerHTML = out2;

}

document.body.append(selectElement);

function getWeather() {
  const cityId = document.querySelector('#city').value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then(weather => {
      return weather.json();
    }).then(showWeather);
}


function showWeather(data) {
  document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)} &#176;`;
  document.querySelector('.windspeed').textContent = `${data.wind.speed} м/с`;
  document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;
