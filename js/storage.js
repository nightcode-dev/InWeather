class Memory {
  constructor(){
    this.city;
    this.state;
    this.defCity = 'تهران';
    this.defState = 'تهران';
  }
  
  saving(city,state){
    localStorage.setItem('city',city);
    localStorage.setItem('state',state);
  }
  
  geting(){
    if(localStorage.getItem('city') === null){
      this.city = this.defCity;
    }else{
      this.city = localStorage.getItem('city')
    }
    if (localStorage.getItem('state') === null) {
      this.state = this.defState;
    } else {
      this.state = localStorage.getItem('state')
    }
    return {
      city: this.city,
      state: this.state
    }
  }
  
  remove(){
    localStorage.removeItem('city');
    localStorage.removeItem('state');
  }
  
}
