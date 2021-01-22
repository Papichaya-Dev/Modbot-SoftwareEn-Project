const { Router } = require('express')
const Bus = require('../../model/Bus')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const Buses = await Buses.find()
        if (!Buses) throw new Error('No Trainbotwords')
        const sorted = Buses.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await Bus.findOne({_id:req.params.id})
        console.log(req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    
    const newBus = new Bus(req.body)
    try {
        const Bus = await newBus.save();
        if (!Bus) throw new Error('Something went wrong saving the Trainbotword')
        res.status(200).json(Bus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
router.post('/:id', async (req, res) => {
    const newBus = new Bus(req.body)
    try {
        const Bus = await newBus.save();
        if (!Bus) throw new Error('Something went wrong saving the Trainbotword')
        res.status(200).json(Bus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await Bus.findByIdAndUpdate(id, req.body)
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
        const removed = await Bus.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router