var express = require('express');
var router = express.Router();

// Import controllers
var {
    getTimeline,
    createComment,
    deleteComment,
    endTimeline
  } = require("../controllers/timeline/index");

// Routes
router.get('/:id_embarque', getTimeline);
router.post('/:id_embarque/add',createComment);
router.post('/:id_embarque/delete',deleteComment);
router.post('/:id_embarque/finish',endTimeline);

module.exports = router;