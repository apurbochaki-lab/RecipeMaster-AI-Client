# 🍽️ RecipeMaster AI

> A modern AI-powered recipe platform where users can discover, create, manage, and chat with an intelligent recipe assistant to make cooking easier and more enjoyable.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css)
![AI Powered](https://img.shields.io/badge/AI-Powered-blueviolet?style=for-the-badge)

---

## 📖 Project Description

RecipeMaster AI is a modern recipe management platform built with Next.js that helps users discover, create, and organize delicious recipes in one place.

The platform features an AI-powered recipe chatbot that assists users with cooking questions, recipe suggestions, ingredient substitutions, and meal ideas. Users can securely register, log in, manage their own recipes, upload recipe images, browse recipe details, and maintain their personal profile through a clean and responsive interface.

The project focuses on performance, simplicity, scalability, and an excellent user experience across desktop, tablet, and mobile devices.

---

## 🌐 Live Demo

🔗 **Live Website:** https://recipe-master-ai-client.vercel.app

🛠️ **Backend Repo:** https://github.com/apurbochaki-lab/RecipeMaster-AI-Server

---

## ✨ Key Features

* 🤖 **AI Recipe Chatbot**
  Get instant cooking assistance, recipe recommendations, ingredient substitutions, and answers to food-related questions using AI.

* 🍲 **Recipe Management**
  Create, delete, and manage your own recipes with an easy-to-use dashboard.

* 📖 **Recipe Details**
  View complete recipe information including ingredients, cooking instructions, images, and additional details.

* 🖼️ **Image Upload**
  Upload beautiful recipe images using ImgBB integration.

* ⭐ **Recipe Reviews**
  Users can share feedback and reviews to improve community engagement.

* 📱 **Fully Responsive Design**
  Optimized experience across desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used

### Frontend

* Next.js
* JavaScript
* Tailwind CSS
* Framer Motion
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Better Auth
* OpenRouter AI API

### Deployment

* Vercel (Frontend)
* Vercel (Backend)

---

## ⚙️ Installation Guide

### 1️⃣ Clone the repository

```bash
git clone https://github.com/apurbochaki-lab/RecipeMaster-AI-Client.git
```

### 2️⃣ Move into project directory

```bash
cd RecipeMaster-AI-Client
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Configure Environment Variables

Create a `.env.local` file in the frontend project:

```env
MONGODB_URI="mongodb_uri_link"
BETTER_AUTH_SECRET="better_auth_secret"
BETTER_AUTH_URL="client_side_url(base-url)"
NEXT_PUBLIC_SERVER="server_side_url(backend)"
GOOGLE_CLIENT_ID="google_client_id"
GOOGLE_CLIENT_SECRET="google_client_secret"
NEXT_PUBLIC_IMGBB_API="imgBB_image_upload_api"

OPENROUTER_API_KEY="open_router_ai_api_key"
```

### 5️⃣ Run the project

```bash
npm run dev
```
---

## 📁 Folder Structure

```text
src
├── app
│   ├── api
│   │   ├── auth
│   │   └── chat
│   ├── auth
│   │   ├── login
│   │   └── register
│   ├── error
│   ├── extras
│   ├── profile
│   ├── recipes
│   │   ├── add
│   │   ├── details
│   │   ├── manage
│   │   ├── loading.jsx
│   │   └── page.jsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.jsx
│
├── components
│
├── lib
│   ├── actions
│   │   ├── recipes.js
│   │   └── server.js
│   ├── api
│   │   ├── myRecipes.js
│   │   ├── recipes.js
│   │   └── reviews.js
│   ├── core
│   │   ├── getToken.js
│   │   ├── imageUpload.js
│   │   └── refreshPath.js
│   ├── auth-client.js
│   ├── auth.js
│   ├── session.js
│   └── proxy.js
│
├── .env
├── .env.local
└── .gitignore
```

---

## 🎯 Future Improvements

* AI-powered recipe generation
* Smart meal planner
* Favorite recipes collection
* Advanced recipe filtering
* Nutritional information
* Shopping list generator
* Recipe sharing system
* Dark & Light mode

---

## 👨‍💻 Author

**Apurbo Chaki**

Frontend Developer | JavaScript Enthusiast | Problem Solver

---

## ⭐ Support

If you found this project helpful, please consider giving it a **star ⭐** on GitHub.