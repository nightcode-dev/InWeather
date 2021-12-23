class UI{
  constructor() {
    this.pos = document.getElementById('pos')
    this.weather = document.getElementById('weather')
    this.icon = document.getElementById('icon')
    this.temp = document.getElementById('temp')
    this.Ltemp = document.getElementById('low-temp')
    this.Mtemp = document.getElementById('max-temp')
    this.press = document.getElementById('press')
    this.hum = document.getElementById('hum')
    this.Swind = document.getElementById('wind-speed')
    this.lon = document.getElementById('lon')
    this.lat = document.getElementById('lat')
    this.InCity = document.getElementById('city')
    this.InState = document.getElementById('ostan')
  }
  
  paint(weather,loc){
    document.getElementById('err').style.display = "none";
    this.pos.textContent = loc
    this.weather.textContent = this.Wtranslate(weather.weather[0].main)
    this.icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    this.temp.textContent = `دما:${Math.round(weather.main.temp-273)} `
    this.Ltemp.textContent = `کمترین دما:${Math.round(weather.main.temp_min-273)}  `
    this.Mtemp.textContent = `بیشترین دما:${Math.round(weather.main.temp_max-273)}`
    this.press.textContent = `فشار:${weather.main.pressure}`
    this.hum.textContent = `رطوبت:${weather.main.humidity}`
    this.Swind.textContent = `سرعت باد:${weather.wind.speed}`
    this.lat.textContent = `عرض جغرافیایی:${weather.coord.lat}  `
    this.lon.textContent = `طول جغرافیایی:${weather.coord.lon}  `
  }
  
  Wtranslate(weather){
    if(weather == 'Thunderstorm'){
      return 'رعد و برق'
    }else if(weather == 'Drizzle'){
      return 'نم باران'
    }else if (weather == 'Rain') {
    return 'بارانی'
    }else if (weather == 'Snow') {
    return 'برفی'
    }else if (weather == 'Mist') {
    return 'غبار'
    }else if (weather == 'Smoke') {
    return 'دود'
    }else if (weather == 'Haze') {
    return 'مه غبار'
    }else if (weather == 'Dust') {
    return 'گرد و خاک'
    }else if (weather == 'Fog') {
    return 'مه'
    }else if (weather == 'Sand') {
    return 'شن'
    }else if (weather == 'Ash') {
    return 'خاکستر آتشفشان'
    }else if (weather == 'Squall') {
    return 'بوران'
    }else if (weather == 'Tornado') {
    return 'طوفان'
    }else if (weather == 'Clear') {
    return 'صاف'
    }else if (weather == 'Clouds') {
      return 'ابری'
    }else{
      return 'هیچی'
    }
  }
  
  sendErr(){
    document.getElementById('err').style.display = "block";
    
  }
}