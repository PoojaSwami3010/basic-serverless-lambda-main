const express = require('express')
const router = new express.Router()
const User = require('../models/user-model')



// create user
router.post('/user/create', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send(user)

  } catch (e) {
    res.status(500).send(e)
  }
})

// get all users
router.get('/getAllUsers', async (req, res) => {
  console.log("in get all users")
  try {
    const users = await User.find();
    res.status(202).send(users)
  } catch (e) {
    res.status(500).send(e)
  }
})


// get single user by id
router.get('/readUser/:id', async (req, res) => {
  const _id = req.params.id
  try {
    const user = await User.findById(_id)
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  } catch (e) {
    res.status(500).send()
  }
})

// Update user
router.patch('/userUpdate/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every((item) => allowedUpdates.includes(item))

  if (!isValidOperation) {
    return res.status(400).send({ 'error': 'Invalid updates!' })
  }
  const id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    if (!user) {
      return res.status(404).send()
    }
    return res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

// delete user
router.delete('/deleteUser/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})
// using aggregation
// router.delete('/getCountByName/:name', async (req, res) => {
//   var pipeline = [    
//       { $group: { _id: req.params.name, count: { $sum: 1 } } },
// ]
//   try {
//     const userAggre = await User.aggregate(pipeline)
//     if (!userAggre) {
//       return res.status(404).send()
//     }
//     res.send(userAggre)
//   } catch (e) {
//     res.status(500).send(e)
//   }
// })


module.exports = router