# 📘 07 - Conditional Rendering

## 🧠 What to Learn
- Conditional rendering means showing **different UI based on a condition**
- You can use `if/else`, **ternary operator** `? :`, or **&& operator** inside JSX
- `&&` is used when you only want to render something **if true** - no else needed
- Ternary is used when you need **either/or** output
- `if/else` is used **outside** the return statement
- Never use regular `if/else` directly inside JSX return - use ternary or `&&` instead

## 🔑 Key Concepts

| Concept | What it means |
|---|---|
| `if/else` | Used outside JSX return to decide what to render |
| Ternary `? :` | Inline either/or - used inside JSX |
| `&&` operator | Render something only if condition is true |
| Conditional rendering | Showing/hiding UI based on a value or state |

## 🆚 When to Use What

| Situation | Use |
|---|---|
| Two different outputs | Ternary `? :` |
| Show only if true | `&&` |
| Complex logic | `if/else` outside return |

## 🎯 One-Liner
> Conditional rendering is just JavaScript conditions deciding what JSX gets returned.