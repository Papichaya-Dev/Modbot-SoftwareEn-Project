const { Router } = require('express')
const Van_table = require('../../model/Van')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const Van = await Van_table.find()
        if (!Van) throw new Error('No Van')
        const sorted = Van.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await Van_table.findOne({_id:req.params.id})
        console.log(req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    
    const newVan = new Van_table(req.body)
    console.log(newVan)
    try {
        const Van = await newVan.save();
        if (!van) throw new Error('Something went wrong saving the van')
        res.status(200).json(Van);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
router.post('/:id', async (req, res) => {
    const newVan = new Van_table(req.body)
    try {
        const Van = await newVan.save();
        if (!Van) throw new Error('Something went wrong saving the van')
        res.status(200).json(Van);
    } catch (error) {
        // console.log('error')
        res.status(500).json({ message: error.message });
    }
})


router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await Van_table.findByIdAndUpdate(id, req.body)
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
        const removed = await Van_table.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router