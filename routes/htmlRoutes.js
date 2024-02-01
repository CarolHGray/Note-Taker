const path = require('path');
const router = require('express').Router();
//Get notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//If pathing issue exists then note on homepage
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
module.exports = router;