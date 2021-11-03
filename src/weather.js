
const request = require('request')



const weatherStack = (latitude , longitude , callback )=> {

    const url = "http://api.weatherstack.com/current?access_key=6defcb5fd94b3c5416d4d9d849c0085b&query=" + latitude + ',' + longitude +"&units=m"
    request({url , json:true} , (error ,  {body} ) => {
        if (error) {
            callback({error : "please check your internet connection"} , undefined);

        }else if (body.error) {
            callback("check your information please")
        }
        else{
            callback(undefined, {
                                 observationtime : body.current.observation_time,
                                   localtime:body.location.localtime,
                                   temperature:body.current.temperature,
                                   Weather:body.current.weather_descriptions,
                                   windSpeed:body.current.wind_speed  ,
                                   windDegree:body.current.wind_degree ,
                                   pressure:body.current.pressure ,
                                   cloudcover:body.current.cloudcover ,
                                   feelslike:body.current.feelslike ,
                                   humidity:body.current.humidity ,
                                   isDay:body.current.is_day ,
                                   name:body.location.name ,
                                   country:body.location.country ,
                                   region:body.location.region ,
                                 }
                
            )
            
        }
    })

}


module.exports = weatherStack