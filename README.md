personal-blog-platform/
│
├── client/                # React frontend
│   ├── public/            # Public assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── PostList.jsx
│   │   │   ├── PostForm.jsx
│   │   │   └── PostDetail.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   └── About.jsx
│   │   ├── App.jsx        # Main React component
│   │   ├── index.css      # TailwindCSS styles
│   │   ├── api/           # Axios API calls
│   │   │   └── posts.js
│   │   └── index.js       # React entry point
│   └── tailwind.config.js # Tailwind configuration
│
├── server/                # Express backend
│   ├── controllers/       # API logic
│   │   └── postsController.js
│   ├── routes/            # API routes
│   │   └── postsRoutes.js
│   ├── middleware/        # Middleware functions
│   │   └── authMiddleware.js
│   ├── data/              # Optional: Initial mock data
│   │   └── posts.json
│   ├── app.js             # Main backend app
│   └── .env               # Environment variables
│
├── deploy/                # Deployment scripts and configs
│   └── azure_deploy.sh    # Azure deployment script
│
└── README.md              # Documentation
