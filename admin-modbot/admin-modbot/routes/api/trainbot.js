const { Router } = require('express')
const BucketListItem = require('../../model/Trainbot')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const bucketListItems = await BucketListItem.find()
        if (!bucketListItems) throw new Error('No bucketListItems')
        const sorted = bucketListItems.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    let newData = {
        keyword: req.body.keyword,
        wordtrain: [
            {
                text: req.body.wordtrain
            }
        ]
    }

    let success = true
    let returnData

    BucketListItem.findOne({keyword: req.body.keyword})
        .then(async res => {
            if(res) {
                let newWordTrain = {text: req.body.wordtrain}
                let oldWordTrain = res.wordtrain

                oldWordTrain.push(newWordTrain)

                let updateData = {
                    keyword: res.keyword,
                    wordtrain: oldWordTrain
                }

                const newBucketListItem = new BucketListItem(updateData)
                success = true

                try {
                    const bucketListItem = await newBucketListItem.save()
                    if (!bucketListItem) throw new Error('Something went wrong saving the bucketListItem')
                    success = true
                    returnData = bucketListItem
                    let remove = await BucketListItem.findByIdAndDelete(res._id)
                } catch (error) {
                    console.log(error)
                }

            } else {
                const newBucketListItem = new BucketListItem(newData)
                success = true

                try {
                    const bucketListItem = await newBucketListItem.save()
                    if (!bucketListItem) throw new Error('Something went wrong saving the bucketListItem')
                    success = true
                    returnData = bucketListItem
                } catch (error) {
                    console.log(error)
                }
            }
        })
    let random = Math.floor(Math.random() * Math.floor(100000000000000));
    console.log(success)
    if(success) {
        console.log(returnData)
        res.status(200).json({keyword: req.body.keyword, _id: `${random}`})
    } else {
        console.log('error')
        res.status(500).json({ message: 'something went wrong' })
    }
    // const newBucketListItem = new BucketListItem(newData)
    // try {
    //     const bucketListItem = await newBucketListItem.save()
    //     if (!bucketListItem) throw new Error('Something went wrong saving the bucketListItem')
    //     console.log(bucketListItem)
    //     res.status(200).json(bucketListItem)
    // } catch (error) {
    //     console.log(error)
    //     res.status(500).json({ message: error.message })
    // }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await BucketListItem.findByIdAndUpdate(id, req.body)
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
        const removed = await BucketListItem.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router