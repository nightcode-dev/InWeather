const storage = new Memory();
const saved = storage.geting()
const weather = new Weather(
  saved.city,
saved.state,
'592c8a63a21d83747c364a50409e8dcd'
)
const ui = new UI();

document.getElementById('change').addEventListener('click',changeLoc)
document.addEventListener('DOMContentLoaded',getWeather)

function getWeather() {
  weather.getWeather()
.then(data => {
  console.log(data)
  ui.paint(data,weather.loc)
})
.catch(err => {
  ui.sendErr()
  storage.remove();
})
}

function changeLoc() 
{
  var state = document.getElementById('ostan').value;
  var city = document.getElementById('city').value;
  storage.saving(state.trim(),city.trim())
  weather.changLocation(state.trim(),city.trim())
  getWeather()
}