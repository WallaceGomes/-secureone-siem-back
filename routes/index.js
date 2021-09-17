const express = require('express');
const router = express();

const userRoutes = require('./usersRoutes');
const auth = require('./authRoutes');
const siem = require('./siemRoutes');

router.use('/api/users', userRoutes);
router.use('/api/auth', auth);
router.use('/api/siem', siem);

module.exports = router;
