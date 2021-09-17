const { Router } = require('express');

const router = Router();
const siemController = require('../controllers/siemController');

router.post('/', siemController.post);
router.get('/', siemController.get);

module.exports = router;
