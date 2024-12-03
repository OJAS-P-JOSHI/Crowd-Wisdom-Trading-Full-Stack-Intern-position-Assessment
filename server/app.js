require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const postsRoutes = require('./routes/postsRoutes');

const app = express();

// Middleware
const allowedOrigins = [
  'https://crowd-wisdom-trading-full-stack-intern-position-assessment.vercel.app', // Vercel frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use('/api/posts', postsRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({
    message: 'API is running',
    availableRoutes: ['/api/posts'],
  });
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
