const { Router } = require('express')
const Question_table = require('../../model/QuestionfromUser')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const Question = await Question_table.find()
        if (!Question) throw new Error('No Question')
        const sorted = Question.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await Question_table.findOne({_id:req.params.id})
        console.log(req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    
    const newQuestion = new Question_table(req.body)
    console.log(newQuestion)
    try {
        const Question = await newQuestion.save();
        if (!Question) throw new Error('Something went wrong saving the question')
        res.status(200).json(Question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
router.post('/:id', async (req, res) => {
    const newQuestion = new Question_table(req.body)
    try {
        const Question = await newQuestion.save();
        if (!Question) throw new Error('Something went wrong saving the question')
        res.status(200).json(Question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.put('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const response = await Question_table.findByIdAndUpdate(id, req.body)
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
        const removed = await Question_table.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router