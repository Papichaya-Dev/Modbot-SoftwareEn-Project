const { Router } = require('express')
const Dash_table = require('../../model/User')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const dash = await Dash_table.find()
        if (!dash) throw new Error('No dashboard')
        const sorted = dash.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router