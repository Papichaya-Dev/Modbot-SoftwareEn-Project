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
    
    Question_table.findOneAndUpdate(
        {userId: req.body.userId, currentQuestion: req.body.currentQuestion, currentProblem: req.body.currentProblem, date: req.body.date}, 
        {$push: {"suggestion":{check_by: req.body.check_by},"problem":{check_by: req.body.check_by}}})
        .then(async (data) => {
            if(data) {
                res.status(200).json(data);
            } else {
                let newdata = {
                    userId: req.body.userId,
                    currentQuestion: req.body.currentQuestion,
                    currentProblem: req.body.currentProblem,
                    date: req.body.date,
                    suggestion: [{check_by: req.body.check_by}],
                    problem: [{check_by: req.body.check_by}],
                    
                  };

                const newQuestion = new Question_table(newdata)
                try {
                    const question = await newQuestion.save();
                    if (!question) throw new Error('Something went wrong saving the bus')
                    res.status(200).json(question);
                    console.log("from backend",req.body)

                } catch (error) {
                    res.status(500).json({ message: error.message });
                    console.log(error)
                    console.log("error from backend",req.body)
                } 
            }
            
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        })
        // const newQuestion = new Question_table(req.body)
        // console.log(newQuestion)
        // try {
        //     const Question = await newQuestion.save();
        //     if (!Question) throw new Error('Something went wrong saving the bus')
        //     res.status(200).json(Question);
        //     console.log("from backend",req.body)
    
        // } catch (error) {
        //     res.status(500).json({ message: error.message });
        //     console.log("error from backend",req.body)
        // }
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
    console.log(id)
    console.log(req.body)
    console.log("update object to Array")
    try {
        const response = await Question_table.updateOne({_id: id}, { $set:
            {
                suggestion: req.body.suggestionArray,
                problem: req.body.problemArray
            }
         })
        if (!response) {
            console.log("errorrrrrrrrrrr")
            throw Error('Something went wrong ')
        }
        else {
            console.log("printttttttttttt")
            res.status(200).json(req.body)
        }
        // const updated = { ...response._doc, ...req.body }
        
        console.log("from backend",req.body)
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log("error from backend",req.body)

    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await Question_table.findByIdAndDelete(id)
        console.log("deleteeeeeeeee")
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    console.log("whatttttttttt")
})

module.exports = router