class Weather {
  constructor(state,city,Key){
     this.apiKey = Key;
     this.state = state;
     this.city = city;
  }
  
  async getWeather() {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`)
    if(res.ok){
      const RD = await res.json()
      return RD
    }else{
      throw Error(res.status)
    }
  }
  
  changLocation(state,city){
    this.city = city;
    this.state = state;
  }
  
  get loc(){
    return `${this.state},${this.city}`
  }
}