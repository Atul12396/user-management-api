const express = require('express');
const router = express.Router();

// Dummy user data for testing
const dummyUser = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '1234567890',
};

// GET /me route
router.get('/me', (req, res) => {
    res.status(200).json({
        message: 'User details retrieved successfully!',
        user: dummyUser,
    });
});

module.exports = router;



