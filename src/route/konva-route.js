const express = require('express')
const router = new express.Router()
const Konva = require('../models/konva-model')


// create user
router.post('/circuit/create', async (req, res) => {
  console.log(req)
  const konva = new Konva(req.body)
  try {
    console.log(konva)
    await konva.save()
    res.status(201).send(konva)

  } catch (e) {
    res.status(500).send(e)
  }
})

// get all users
router.get('/getAllCircuits', async (req, res) => {
  console.log("in get all users")
  try {
    const circuits = await Konva.find();
    res.status(202).send(circuits)
  } catch (e) {
    res.status(500).send(e)
  }
})


// get single user by id
router.get('/readCircuit/:id', async (req, res) => {
  const _id = req.params.id
  try {
    const circuit = await Konva.findById(_id)
    console.log(circuit)
    if (!circuit) {
      return res.status(404).send()
    }
    res.send(circuit)
  } catch (e) {
    res.status(500).send()
  }
});

module.exports = router