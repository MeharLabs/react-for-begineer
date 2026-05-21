# 📘 05 - JSX

## 🧠 What to Learn
- JSX stands for **JavaScript XML** - it lets you write HTML-like syntax in JavaScript
- JSX is NOT HTML - it gets converted to regular JavaScript behind the scenes
- Every JSX element must have a **single root element** (wrap in `<div>` or `<>`)
- Use `{}` curly braces to write **JavaScript expressions** inside JSX
- HTML attributes are different in JSX - `class` → `className`, `for` → `htmlFor`
- Self-closing tags are required in JSX - `<img />`, `<input />`, `<br />`
- JSX expressions must return a **single parent element**

## 🔑 Key Concepts

| Concept | What it means |
|---|---|
| JSX | HTML-like syntax written inside JavaScript |
| `{}` curly braces | Write any JS expression inside JSX |
| `className` | JSX version of HTML `class` attribute |
| Fragment `<>` | Empty wrapper - no extra div in the DOM |
| Self-closing tags | `<img />`, `<input />` - required in JSX |
| Single root rule | Every component must return one parent element |

## 🆚 JSX vs HTML

| HTML | JSX |
|---|---|
| `class="box"` | `className="box"` |
| `for="name"` | `htmlFor="name"` |
| `<img>` | `<img />` |
| `<br>` | `<br />` |
| `onclick` | `onClick` |

## 💡 One-Line Summary
> JSX is just JavaScript with HTML-like syntax - curly braces let you bring JS back in whenever you need it. 🎯