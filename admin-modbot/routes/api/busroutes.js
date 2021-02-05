const { Router } = require('express')
const bus_table = require('../../model/Bus')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const bus = await bus_table.find()
        if (!bus) throw new Error('No Bus')
        const sorted = bus.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await bus_table.findOne({_id:req.params.id})
        console.log(req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    
    const newBus = new bus_table(req.body)
    console.log(newBus)
    try {
        const bus = await newBus.save();
        if (!bus) throw new Error('Something went wrong saving the bus')
        res.status(200).json(bus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
router.post('/:id', async (req, res) => {
    const newBus = new bus_table(req.body)
    try {
        const bus = await newBus.save();
        if (!bus) throw new Error('Something went wrong saving the bus')
        res.status(200).json(bus);
    } catch (error) {
        console.log('error')
        res.status(500).json({ message: error.message });
    }
})


router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await bus_table.findByIdAndUpdate(id, req.body)
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
        const removed = await bus_table.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router