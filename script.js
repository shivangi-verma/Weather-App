const api_key = "06af466ab1b341b084f93439250309";

async function btnHandler() {
  const cityName = document.getElementById("inputField").value;
  const baseURL = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${cityName}`;
  try {
    console.log("city = " + cityName);
    console.log(baseURL);

    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);

    const icon = document.getElementById("icon");
    icon.setAttribute("src", `https:${data.current.condition.icon}`);

    const temp = document.getElementById("temp");
    temp.innerHTML = `Temperature : ${data.current.temp_c} °C`;

    const weather = document.getElementById("weather");
    weather.innerHTML = `${data.current.condition.text}`;

    const cloud = document.getElementById("cloud");
    cloud.innerHTML = `Cloud : ${data.current.cloud}`;

    const humidity = document.getElementById("humidity");
    humidity.innerHTML = `Humidity : ${data.current.humidity} `;

    const country = document.getElementById("country");
    country.innerHTML = `Country : ${data.location.country} `;

    const lat = document.getElementById("lat");
    lat.innerHTML = `Latitude : ${data.location.lat} `;

    const lon = document.getElementById("lon");
    lon.innerHTML = `Longitude : ${data.location.lon} `;
  } catch (error) {
    console.log("error");
  }
}
