
const form = document.querySelector('.form1')
const form2 = document.querySelector('.form2')
const searchInput = document.getElementById('search1')
const searchInput2 = document.getElementById('search2')
const errorInput = document.querySelector('.error')


form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const Address = searchInput.value 
    console.log(Address);

    fetch(`/weather?address=${Address}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
              return  errorInput.textContent = data.error;
            }else{
                
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
                console.log(data);
                return errorInput.textContent = ""
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
              return  errorInput.textContent = data.error;
            }else{
                
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
                console.log(data);
                return errorInput.textContent = ""
            }
        
        })
    })
    
})