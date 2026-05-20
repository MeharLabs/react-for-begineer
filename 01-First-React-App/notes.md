# 📘 01 - First React App

## 🧠 What to Learned
- React is a JavaScript **library** for building UIs - not a full framework
- We use **Vite** to create React apps - it's fast and modern
- Every React app mounts into a single `<div id="root">` in `index.html`
- `main.jsx` is the entry point → it renders `App.jsx` into that root div
- `App.jsx` is the **root component** — everything starts from here
- JSX = writing HTML-like syntax inside JavaScript
- A **component** is just a JavaScript function that returns JSX

## ⚙️ How to Create a React App (Vite)
```bash
npm create vite@latest name_of_project -- --template react

npm create vite@latest 01-first-react-app -- --template react
cd 01-first-react-app
npm install
npm run dev
```

## 🔑 Key Concepts

| Concept | What it means |
|---|---|
| Component | A reusable UI piece - just a function! |
| JSX | HTML-like syntax inside JavaScript |
| `root` div | The single element React takes over in HTML |
| Vite | Modern build tool - fast dev server |
| `npm run dev` | Starts local server at `localhost:5173` |

## 🗂️ Important Files
| File | Purpose |
|---|---|
| `index.html` | The one HTML file — has `<div id="root">` |
| `src/main.jsx` | Entry point — mounts App into root |
| `src/App.jsx` | Root component — your UI starts here |

## 🏗️ What I Built
- Scaffolded a React app using Vite
- Cleaned up default boilerplate
- Wrote a custom `App.jsx` with a heading and paragraph
- Understood the flow: `index.html` → `main.jsx` → `App.jsx` → browser


> React apps are just JavaScript functions returning JSX, all mounted into one div. That's it.