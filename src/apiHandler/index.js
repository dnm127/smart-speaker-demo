const axios = require('axios');

export async function getWeatherInfo() {
  const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=1581129&appid=bfd48d95a363f5ce8fc25d5b1fecce74`);
  return data.data;
}
