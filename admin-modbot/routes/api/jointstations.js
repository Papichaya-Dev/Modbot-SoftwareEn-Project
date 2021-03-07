const { Router } = require('express')
const jointstation_table = require('../../model/JointStation')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const jointstation = await jointstation_table.find()
        if (!jointstation) throw new Error('No Bus')
        const sorted = jointstation.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await jointstation_table.findOne({_id:req.params.id})
        console.log(req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    jointstation_table.findOneAndUpdate(
        {joint_station: req.body.joint_station, latitude: req.body.latitude, longitude: req.body.longitude}, 
        {$push: {"bus_no":{first_parked_bus: req.body.first_parked_bus, second_parked_bus: req.body.second_parked_bus}}})
        .then(async (data) => {
            if(data) {
                res.status(200).json(data);
            } else {
                let newdata = {
                    joint_station: req.body.joint_station,
                    latitude: req.body.latitude,
                    longitude: req.body.longitude,
                    bus_no: [{first_parked_bus: req.body.first_parked_bus, second_parked_bus: req.body.second_parked_bus}],
                  };

                const newJointstation = new jointstation_table(newdata)
                try {
                    const jointstation = await newJointstation.save();
                    if (!jointstation) throw new Error('Something went wrong saving the bus')
                    res.status(200).json(jointstation);
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
    // const newJointstation = new jointstation_table(req.body)
    // console.log(newJointstation)
    // try {
    //     const jointstation = await newJointstation.save();
    //     if (!jointstation) throw new Error('Something went wrong saving the bus')
    //     res.status(200).json(jointstation);
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
})
router.post('/:id', async (req, res) => {
    const newJointstation = new jointstation_table(req.body)
    try {
        const jointstation = await newJointstation.save();
        if (!jointstation) throw new Error('Something went wrong saving the bus')
        res.status(200).json(jointstation);
    } catch (error) {
        console.log('error')
        res.status(500).json({ message: error.message });
    }
})


router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await jointstation_table.findByIdAndUpdate(id, req.body)
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
        const removed = await jointstation_table.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router