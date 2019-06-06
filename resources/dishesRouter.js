const express = require('express');
const dbDish = require('./dishesModel');

const router = express.Router();

// get dishes
router.get('/', (req, res) => {
    dbDish.findDish()
    .then(dishes => {
        dishes!==null ? res.status(200).json({success: true, message: 'Successfully retrieved dishes!', dishes}):
        res.status(404).json({success: false, message: 'Sorry, no dishes currently in database!'})
    })
    .catch(err => {
        res.status(500).json(errorRef(err))
    })
})

// add dish
router.post('/', (req, res) => {
    
})

// get dish by id
router.get('/:id', (req, res) => {
    
})

// get recipes for dish
router.get('/:id', (req, res) => {
    
})

// add recipe for dish
router.post('/:id', (req, res) => {
    
})

// error middleware
const errorRef = (error) => {
    const hash = Math.random().toString(36).substring(2);
    console.log(hash, error)
    return { message: `Unknown Error, Ref: ${hash}`, error }
}

module.exports = router;