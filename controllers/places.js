const router = require('express').Router();
const places = require('../models/places.js')

/*let Places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  //pic: '/public/images/dining-room.jpg'
  pic: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_679,q_65,w_639/v1/clients/overlandpark/coffee_black_dog_9a84804a-04fd-4848-b8f5-5022caecc514.jpg'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  //pic: '/public/images/coffee_black_.jpg'
  pic: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/a8/02/ba/dining-room.jpg'
}]*/


// GET /places
router.get('/', (req, res) => {
  
  res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id] })
  }
})



router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})



module.exports = router