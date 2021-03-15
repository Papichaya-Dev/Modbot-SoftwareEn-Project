const { Router } = require('express')
const minibus_table = require('../../model/Minibus')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const minibus = await minibus_table.find()
        if (!minibus) throw new Error('No Mini-Bus')
        const sorted = minibus.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await minibus_table.findOne({_id:req.params.id})
        console.log(req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    
    const newMiniBus = new minibus_table(req.body)
    console.log(newMiniBus)
    try {
        const minibus = await newMiniBus.save();
        if (!minibus) throw new Error('Something went wrong saving the minbus')
        res.status(200).json(minibus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
router.post('/:id', async (req, res) => {
    const newMiniBus = new minibus_table(req.body)
    try {
        const minibus = await newMiniBus.save();
        if (!minibus) throw new Error('Something went wrong saving the minibus')
        res.status(200).json(minibus);
    } catch (error) {
        console.log('error')
        res.status(500).json({ message: error.message });
    }
})


router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await minibus_table.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await minibus_table.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router