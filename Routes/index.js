const axios = require('axios');
const {Router} = require('express')

const router = Router();

router.get('/', async (req, res) => {
 
    const btcToUsdt = await axios.get(`https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT`)
    const UsdToChilean = await axios.get(`https://mindicador.cl/api`)

    const info = {
        BitcoinToUSDT: 'U$S ' + btcToUsdt.data.price,
        UsdToChileanPeso: '$ ' + UsdToChilean.data.dolar.valor,
        BitcoinToChileanPeso: '$ ' + (UsdToChilean.data.dolar.valor - 0) * (btcToUsdt.data.price - 0)
    }
    
    try {
        res.status(200).json(info)
    } catch (error) {
        res.status(400).send('Cannot get the information')
    }
})


module.exports = router