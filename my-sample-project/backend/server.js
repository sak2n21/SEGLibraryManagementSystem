// const cors = require('cors');
// const express = require('express');
// const app = express();
// const port = 5000; // You can choose any port that's not in use
//
// app.use(cors());
// app.get('/api/messages', (req, res) => {
//     res.json({
//         messages: [
//             'Hello from the backend!',
//             'Here is another line of text.',
//             'Building web apps is fun!',
//         ]
//     });
// });
//
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy user data (replace with database integration)
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true, message: 'Login successful', user });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
