//// backend/app.js
//const express = require('express');
//const app = express();
//const connectToDatabase = require('./db');
//const { fetchUsers } = require('./userOperations');

//// Your existing restaurant endpoint
//app.get('/api/restaurants', async (req, res) => {
//    // Implement your restaurant logic here
//    res.send('Restaurant data');
//});

//// New endpoint for fetching users
//app.get('/api/users', async (req, res) => {
//    try {
//        const users = await fetchUsers();
//        res.json(users);
//    } catch (error) {
//        console.error('Error fetching users:', error);
//        res.status(500).json({ error: 'Internal server error' });
//    }
//});

//const PORT = 3001;
//app.listen(PORT, () => {
//    console.log(`Server is running on port ${PORT}`);
//});
