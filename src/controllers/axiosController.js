let axios = require("axios")
//-----/v2/appointment/sessions/public/findByDistrict
//'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=10f2580f62fbd2df117ba62b7012e3a2



let getSessionsByDistricts = async function (req, res) {
    try {

        let id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${id} ${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//sol-03

let getMemes = async function (req, res) {
    try {
        const { template_id } = req.query;
        const { text0 } = req.query;
        const { text1 } = req.query;
        const { username } = req.query;
        const { password } = req.query;

        const response = await axios.post(`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(error);
    }
}


let getCityWeather = async function (req, res) {
    try{
        let q = req.query.q
        let appid = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}

let getTemprature = async function(req,res){
    try{
        let q = req.query.q
        let appid = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })
    }
    catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let sortcities = async function (req, res) {
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    try {
        let Array = []
        for (let i = 0; i < cities.length; i++) {          
            let q = cities[i]
            let appid = req.query.appid
           // console.log(`query data : ${q} ${appid}`)
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
            }
            let cityweather = await axios(options)
            console.log(cityweather.data)

            Array.push({
                city : cityweather.data.name , 
                temp : cityweather.data.main.temp
            })

        }
        
        Array.sort((a,b)=>{
            return a.temp-b.temp
        })
        res.status(200).send({status:true, message: Array });
    }
    catch (err) {
        console.log({ status: false, error: err.message })
        res.status(500).send({ status: false, error: err.message })
    }
}
module.exports.getTemprature=getTemprature
module.exports.sortcities=sortcities
module.exports.getCityWeather = getCityWeather
module.exports.getMemes = getMemes
module.exports.getSessionsByDistricts = getSessionsByDistricts