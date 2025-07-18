# 🛍️ ShoppyGlobe – E-commerce React App

**ShoppyGlobe** is a modern single-page e-commerce application built with React, Redux, and Vite. It features dynamic product browsing, product details, cart functionality, and responsive design — all styled with custom CSS.

---

## 🚀 Live Demo

👉 [Click here to visit the live site](https://mujahidsayyed09.github.io/ShoppyGlobe)

---

## 📦 Features

- 🧭 **Routing** with React Router
- 🛒 **Cart Management** using Redux Toolkit
- ⚡ **Lazy Loading** with `React.lazy` and `Suspense`
- 🧼 **Clean UI** with custom responsive CSS
- 🚫 Handles 404 Not Found routes
- 📦 Deployed using GitHub Pages

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Redux Toolkit
- **Bundler**: Vite
- **State Management**: Redux
- **Styling**: CSS (no Tailwind)
- **Hosting**: GitHub Pages

---


yaml
Copy
Edit

---

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mujahidsayyed09/ShoppyGlobe.git
   cd shoppyglobe
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm run dev
Build for production

bash
Copy
Edit
npm run build
🌐 Deploy to GitHub Pages
1. Install the gh-pages package
bash
Copy
Edit
npm install gh-pages --save-dev
2. Add these to package.json
json
Copy
Edit
"homepage": "https://mujahidsayyed09.github.io/ShoppyGlobe",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
3. Add base config in vite.config.js
js
Copy
Edit
export default defineConfig({
  base: '/ShoppyGlobe/',
  plugins: [react()],
})
4.npm run deploy
Your app will be live at:
bash
Copy
Edit
https://mujahidsayyed09.github.io/ShoppyGlobe
