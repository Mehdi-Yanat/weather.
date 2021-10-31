const express = require('express')
const path = require('path')
const app = express()
const mapBox = require('./src/map')
const weatherStack = require('./src/weather')
const port = process.env.PORT || 3000

const Directory = path.join(__dirname , './public')
const viewsDirectory = path.join(__dirname , './public/views')

app.set('view engine' , 'hbs')
app.set('views' , viewsDirectory)
app.use(express.static(Directory))



app.get('' , (req , res)=> {
    res.render('index')
  
})

app.get('/weather' , (req , res ) => {
        if (!req.query.address) {
         return   res.send('please put on right information')
        }else{
            mapBox(req.query.address ,(error , {latitude , longitude , location} ={}) => {
                if (error) {
                   return res.send({error : "please put correct information"});
                }else{
                    weatherStack(latitude , longitude ,(error , weather)=> {
                        if (error) {
                         return   res.send({error:"error"});
                        }else{
                            res.send({
                                weatherStack:weather,
                                location:location,
                                address:req.query.address
                            });
                        }
                    })
                }
            })
        }
     
})

app.listen(port , ()=> {
    console.log("started at port "+ 3000);
})