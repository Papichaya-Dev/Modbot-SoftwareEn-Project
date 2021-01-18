const { Router } = require('express')
const Trainbotword = require('../../model/Trainbotword')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const Trainbotwords = await Trainbotword.find()
        if (!Trainbotwords) throw new Error('No Trainbotwords')
        const sorted = Trainbotwords.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await Trainbotword.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const newTrainbotword = new Trainbotword(req.body)
    try {
        const Trainbotword = await newTrainbotword.save();
        if (!Trainbotword) throw new Error('Something went wrong saving the Trainbotword')
        res.status(200).json(Trainbotword);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await Trainbotword.findByIdAndUpdate(id, req.body)
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
        const removed = await Trainbotword.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// // parameter (bot) :: bot's word
// router.post('/keyword', async (req, res) => {
//     const newParambotword = new ParamBot(req.body)
//     try {
//         const parambotword = await newParambotword.save()
//         if (!parambotword) throw new Error('Something went wrong saving the Trainbotword')
//         res.status(200).json(parambotword)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     } 
// })
// router.get('/keyword', async (req, res) => {
//     try {
//         const parambotwords = await ParamBot.find()
//         if (!parambotwords) throw new Error('No keyword')
//         const sorted = parambotwords.sort((a, b) => {
//             return new Date(a.date).getTime() - new Date(b.date).getTime()
//         })
//         res.status(200).json(sorted)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });
// router.put('/update/:id', async (req, res) => {
//     const { id } = req.params

//     try {
//         const response = await paramBot.findByIdAndUpdate(id, req.body)
//         if (!response) throw Error('Something went wrong ')
//         const updated = { ...response._doc, ...req.body }
//         res.status(200).json(updated)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });
// router.delete('/delete/:id', async (req, res) => {
//     const { id } = req.params
//     try {
//         const removed = await paramBot.findByIdAndDelete(id)
//         if (!removed) throw Error('Something went wrong ')
//         res.status(200).json(removed)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// });

module.exports = router