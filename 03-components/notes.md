# 📘 03 — Components

## Components in React
Components are reusable building blocks of your UI - like LEGO bricks!

```Javascript
function Fn(){
  return HTML describing the UI
}
```

## 🧠 What to Learn

- A component is just a **JavaScript function** that returns JSX
- Component names must start with a **Capital Letter** (e.g. `Header`, not `header`)
- Components make your UI **reusable** — write once, use anywhere
- You can have as many components as you want in one file or separate files
- Components can be used like HTML tags: `<Header />` or `<Header></Header>`
- Every React app is just a **tree of components** starting from `App.jsx`
- A convention where each word in a compound name begins with a capital letter and all words are joined together without spaces or underscores. For example, `UserProfile`.

## 🔑 Key Concepts

| Concept | What it means |
|---|---|
| Component | A function that returns JSX |
| Capital Letter | Required for component names — React rule |
| Reusability | Same component used in multiple places |
| Component Tree | App → Header, Main, Footer → their children |
| Self-closing tag | `<Header />` — use when no children inside |

## 🗂️ Types of Components (for now)

| Type | Example |
|---|---|
| Function Component | `function Header() { return <h1>Hello</h1> }` |
| Arrow Function Component | `const Header = () => <h1>Hello</h1>` |

> 💡 Both are the same thing - just different syntax. Function style is more common for beginners.

## 🔁 Component Tree of This Project
```
App
├── Header
├── MainContent
└── Footer
```

## 🏗️ What to Build
- A simple app with 3 separate components: `Header`, `MainContent`, `Footer`
- All components written in `App.jsx`
- Understood how components nest inside each other


## 💡 One-Line Summary
> A component is just a function that returns JSX - and your whole UI is just components inside components.