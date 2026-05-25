# 📘 10 - Handling Events

## 🧠 What to Learn
- React events work just like HTML events but with **camelCase** syntax
- `onclick` in HTML → `onClick` in React
- Event handlers are **functions** passed to JSX elements as props
- You pass the function **reference** - not a call - `onClick={handleClick}` ✅ not `onClick={handleClick()}` ❌
- You can define handlers **inline** or as a **separate function**
- The event object `e` is automatically passed to every handler function
- `e.preventDefault()` stops default browser behavior (e.g. form submit reload)

## 🔑 Key Concepts

| Concept | What it means |
|---|---|
| `onClick` | Fires when element is clicked |
| `onChange` | Fires when input value changes |
| `onSubmit` | Fires when form is submitted |
| `onMouseEnter` | Fires when mouse hovers over element |
| Event handler | A function that runs when event fires |
| `e.preventDefault()` | Stops default browser behavior |
| Function reference | Pass `handleClick` not `handleClick()` |

## 🆚 HTML vs React Events

| HTML | React |
|---|---|
| `onclick` | `onClick` |
| `onchange` | `onChange` |
| `onsubmit` | `onSubmit` |
| `"handleClick()"` string | `{handleClick}` function ref |

## 🆚 Inline vs Separate Handler

| Inline | Separate |
|---|---|
| `onClick={() => console.log("clicked")}` | `function handleClick() {}` then `onClick={handleClick}` |
| Good for simple one-liners | Better for complex logic |

## 🎯 One-Liner
> React events are just camelCase HTML events - pass a function reference, not a call, and you're good.