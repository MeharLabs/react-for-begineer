# 📘 09 - Styling React Components

## 🧠 What to Learn
- There are **4 main ways** to style in React
- **Inline styles** - style prop directly on the element, written as a JS object
- **CSS file** - regular `.css` file imported into the component
- **CSS Modules** - scoped CSS, styles only apply to that specific component
- **Tailwind CSS** - utility-first CSS framework (most popular in real projects)
- `className` is used instead of `class` in JSX - always
- Inline styles use **camelCase** - `backgroundColor` not `background-color`

## 🔑 Key Concepts

| Concept | What it means |
|---|---|
| Inline style | `style={{ color: "red" }}` - JS object, camelCase properties |
| CSS file | Regular CSS imported - `import './App.css'` |
| CSS Modules | `import styles from './Card.module.css'` - scoped to component |
| Tailwind CSS | Utility classes directly in JSX - `className="text-red-500"` |
| `className` | JSX version of HTML `class` |
| camelCase | JSX inline style rule - `fontSize` not `font-size` |

## 🆚 4 Ways to Style

| Method | Scoped? | Best For |
|---|---|---|
| Inline styles | ✅ Yes | Quick one-off styles |
| CSS file | ❌ No | Global or simple styles |
| CSS Modules | ✅ Yes | Component-level styles |
| Tailwind CSS | ✅ Yes | Real projects, fast styling |

## 🎯 One-Liner
> React gives you multiple ways to style - inline for quick, CSS files for simple, CSS Modules for scoped, Tailwind for real projects.