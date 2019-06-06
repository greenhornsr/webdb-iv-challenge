const express = require('express');
const dbDish = require('./dishesModel');

const router = express.Router();

router.use(express.json());

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
    const newDish = req.body
    console.log("This is my new Dish: ",newDish)
    dbDish.addDish(newDish)
    .then(count => {
        const unit = count > 1 ? 'dishes': 'dish';
        count ? res.status(201).json({success: true, message: `${newDish.name} ${unit} added!`, newDish}):
        res.status(400).json({success: false, message: 'could not add new Dish!'})    
    })
    .catch(err => {
        res.status(500).json(errorRef(err))
    })
    
})

// get dish by id
router.get('/:id', (req, res) => {
    const {id} = req.params;
    dbDish.findDishById(id)
    .then(dish => {
        dish ? res.status(200).json({success: true, message: `${dish.name} has been found!`, dish}):
        res.status(404).json({success: false, message: `no such dish with id ${id}`})
    })
    .catch(err => {
        res.status(500).json(errorRef(err));
    })
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