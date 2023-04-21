const router = require('express').Router();

let Places = [{
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
}]

router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
  
  res.render('places/index', { Places })
})


module.exports = router