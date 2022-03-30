const axios = require('axios');
const {Router} = require('express')

const router = Router();

router.get('/', async (req, res) => {

    const info = await axios.get('https://localbitcoins.com/sell-bitcoins-online/clp/.json')
    const infoCleaned = info.data.data.ad_list.map(el =>  el
        // return{
        //     id: el.data.ad_id,
        //     BTC_price_USD: el.data.temp_price_usd,
        //     BTC_price_CL: el.data.temp_price,
        //     datetime: el.data.profile.last_online,
        //     CL_USD: el.data.temp_price / el.data.temp_price_usd
        // }
    )
    

    const infoSorted = infoCleaned.sort((a,b) => {return new Date(b.data.created_at) - new Date(a.data.created_at)})
    
    res.status(200).json(infoSorted)
        
})


router.get('/buy', async (req, res) => {
 
    const info = await axios.get(`https://localbitcoins.com/buy-bitcoins-online/usd/.json`)

    const infoCleaned = info.data.data.ad_list.map(el => {
        return{
            id: el.data.ad_id,
            BTC_price_USD: el.data.temp_price_usd,
            datetime: el.data.profile.last_online,
            
        }
    })

    const infoSorted = infoCleaned.sort((a,b) => {return b.BTC_price_USD - a.BTC_price_USD})
    
    res.status(200).json(infoSorted)
})


module.exports = router