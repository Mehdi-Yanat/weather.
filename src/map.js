
const request = require('request')


const mapBox = (address , callback)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoiaGFtaWQzMTMxIiwiYSI6ImNrdXg5cWlwajBlMG4ydXF3bmtjYnUzb3oifQ.ZabC87_27vfuiFnT2jrRVg"
    request({url , json:true} , (error , {body}) => {
        if (error) {
            callback({error:"please check your internet connection"} , undefined);
        }else if (body.features.length === 0 ) {
            callback({error:"please Check your information"});
        }
        else{
            callback(undefined , {
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            } );
        }
    })


}


module.exports = mapBox