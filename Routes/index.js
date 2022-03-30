const {Router} = require('express')

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).send('Everything fine')
    } catch (error) {
        res.status(404).send('Error getting data')
    }
})

module.exports = router