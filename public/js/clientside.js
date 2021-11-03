
const form = document.querySelector('.form1')
const form2 = document.querySelector('.form2')
const searchInput = document.getElementById('search1')
const searchInput2 = document.getElementById('search2')
const errorInput = document.querySelector('.error')
const weathericone =document.querySelector('.weatherIcon')
const weathericon2 = document.querySelector('.weather-2')

AOS.init();

form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const Address = searchInput.value 
    console.log(Address);
    fetch(`/weather?address=${Address}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                errorInput.textContent = data.error;
            }
            else{
                errorInput.textContent = ""
                $('.weather').text(data.weatherStack.Weather) ;
                $('.location').text(data.address) ;
                $('.localtime').text(data.weatherStack.observationtime) ;
                $('.temp').text( data.weatherStack.temperature + "°") ;
                $('.wind1').text(data.weatherStack.windSpeed + " km/h") ;
                $('.wind-degree').text( data.weatherStack.windDegree +" %") ;
                $('.pression').text( data.weatherStack.pressure + " mb") ;
                $('.cloudcover').text( data.weatherStack.cloudcover + " km/h") ;
                $('.humidi').text(data.weatherStack.humidity + " %") ;
                $('.feel').text(data.weatherStack.feelslike + " °") ;
                $('.day').text(data.weatherStack.isDay) ;
                $('.name').text(data.weatherStack.name) ;
                $('.country-place').text(data.weatherStack.country) ;
                $('.p1').text(data.weatherStack.region) ;  
                $('.region').text(data.weatherStack.region) ;  
                if (data.weatherStack.Weather == "fog" && dayNight == "yes") {
                    weathericone.innerHTML = `<i class="wi wi-day-fog"></i>`
                }else if (data.weatherStack.Weather == "Partly cloudy" || data.weatherStack.Weather == "cloudy" && data.weatherStack.isDay == "yes") {
                    weathericone.innerHTML = `<i class="wi wi-day-cloudy"></i>`
                    
                }else if (data.weatherStack.Weather == "rain" && data.weatherStack.isDay == "yes") {
                    weathericone.innerHTML = `<i class="wi wi-day-rain"></i>`
                    
                }else if (data.weatherStack.Weather == "Sunny" && data.weatherStack.isDay == "yes") {
                    weathericone.innerHTML = `<i class="wi wi-day-sunny"></i>`
                } else if (data.weatherStack.Weather == "Snow" || data.weatherStack.Weather == "Freezing fog" && data.weatherStack.isDay == "yes") {
                    weathericone.innerHTML = `<i class="wi wi-day-snow"></i>`
                }else if (data.weatherStack.Weather == "Clear" && data.weatherStack.isDay == "yes") {
                    weathericone.innerHTML = `<i class="wi wi-day-clear"></i>`
                }
                else if(data.weatherStack.Weather == "fog" && data.weatherStack.isDay == "no") {
                    weathericone.innerHTML = `<i class="wi wi-night-fog"></i>`
                }else if (data.weatherStack.Weather == "Partly cloudy" || data.weatherStack.Weather == "cloudy" && data.weatherStack.isDay == "no") {
                    weathericone.innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
                    
                }else if (data.weatherStack.Weather == "rain" && data.weatherStack.isDay == "no") {
                    weathericone.innerHTML = `<i class="wi wi-night-rain"></i>`
                    
                } else if (data.weatherStack.Weather == "Snow" || data.weatherStack.Weather == "Freezing fog" && data.weatherStack.isDay == "no") {
                    weathericone.innerHTML = `<i class="wi wi-night-alt-snow"></i>`
                }else if (data.weatherStack.Weather == "Clear" && data.weatherStack.isDay == "no") {
                    weathericone.innerHTML = `<i class="wi wi-night-clear"></i>`
                }
                
            }
        })
    })
})

form2.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const Address = searchInput2.value 
    console.log(Address);

    fetch(`/weather?address=${Address}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                errorInput.textContent = data.error;
            }else{
                errorInput.textContent = ""
                $('.weather').text(data.weatherStack.Weather) ;
                $('.location').text(data.address) ;
                $('.localtime').text(data.weatherStack.observationtime) ;
                $('.temp1').text( data.weatherStack.temperature + "°") ;
                $('.wind1').text(data.weatherStack.windSpeed + " km/h") ;
                $('.wind-degree').text( data.weatherStack.windDegree +" %") ;
                $('.pression').text( data.weatherStack.pressure + " mb") ;
                $('.cloudcover').text( data.weatherStack.cloudcover + " km/h") ;
                $('.humidi').text(data.weatherStack.humidity + " %") ;
                $('.feel').text(data.weatherStack.feelslike + " °") ;
                $('.day').text(data.weatherStack.isDay) ;
                $('.name').text(data.weatherStack.name) ;
                $('.country-place').text(data.weatherStack.country) ;
                $('.p2').text(data.weatherStack.region) ;
                $('.region').text(data.weatherStack.region) ;  
                if (data.weatherStack.Weather == "fog" && dayNight == "yes") {
                    weathericon2.innerHTML = `<i class="wi wi-day-fog"></i>`
                }else if (data.weatherStack.Weather == "Partly cloudy" || data.weatherStack.Weather == "cloudy" && data.weatherStack.isDay == "yes") {
                    weathericon2.innerHTML = `<i class="wi wi-day-cloudy"></i>`
                    
                }else if (data.weatherStack.Weather == "rain" && data.weatherStack.isDay == "yes") {
                    weathericon2.innerHTML = `<i class="wi wi-day-rain"></i>`
                    
                }else if (data.weatherStack.Weather == "Sunny" && data.weatherStack.isDay == "yes") {
                    weathericon2.innerHTML = `<i class="wi wi-day-sunny"></i>`
                } else if (data.weatherStack.Weather == "Snow" || data.weatherStack.Weather == "Freezing fog" || data.weatherStack.Weather == "Freezing" && data.weatherStack.isDay == "yes") {
                    weathericon2.innerHTML = `<i class="wi wi-day-snow"></i>`
                }else if (data.weatherStack.Weather == "Clear" && data.weatherStack.isDay == "yes") {
                    weathericon2.innerHTML = `<i class="wi wi-day-clear"></i>`
                }
                else if(data.weatherStack.Weather == "fog" && data.weatherStack.isDay == "no") {
                    weathericon2.innerHTML = `<i class="wi wi-night-fog"></i>`
                }else if (data.weatherStack.Weather == "Partly cloudy" || data.weatherStack.Weather == "cloudy" && data.weatherStack.isDay == "no") {
                    weathericon2.innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
                    
                }else if (data.weatherStack.Weather == "rain" && data.weatherStack.isDay == "no") {
                    weathericon2.innerHTML = `<i class="wi wi-night-rain"></i>`
                    
                } else if (data.weatherStack.Weather == "Snow" || data.weatherStack.Weather == "Freezing fog" && data.weatherStack.isDay == "no") {
                    weathericon2.innerHTML = `<i class="wi wi-night-alt-snow"></i>`
                }else if (data.weatherStack.Weather == "Clear" && data.weatherStack.isDay == "no") {
                    weathericon2.innerHTML = `<i class="wi wi-night-clear"></i>`
                }
            }
            
        })
    })
    
})