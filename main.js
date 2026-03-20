const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const list = document.getElementById("list");
const title = document.getElementById("title"); 

const coordinates = {
  tashkent: { lat: 41.3111, lon: 69.2797 },
  samarkand: { lat: 39.6542, lon: 66.9597 },
  bukhara: { lat: 39.7747, lon: 64.4286 },
};

btn.addEventListener("click", getData);

async function getData() {
  const city = inp.value.toLowerCase().trim();

  if (!coordinates[city]) {
    list.innerHTML = "Shahar topilmadi";
    title.innerHTML = "";
    return;
  }

  const lat = coordinates[city].lat;
  const lon = coordinates[city].lon;

  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

  title.innerHTML = `${formattedCity}, Uzbekistan`;
  title.classList.add('viloyat');

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );

  const data = await response.json();

  list.innerHTML = `Harorat: ${data.current_weather.temperature} °C`;

  list.classList.add('quti'); 
}