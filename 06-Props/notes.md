# 📘 06 - Props

## 🧠 What to Learn
- Props stands for **properties** - they let you pass data into a component
- Props are passed like HTML attributes: `<Card title="Hello" />`
- Inside the component, props are received as a **function parameter**
- Props are **read-only** - you can never change props inside a component
- You can pass any data type as a prop - string, number, boolean, array, object, function
- If no prop is passed, you can set a **default value** for it
- Use **destructuring** to make props cleaner to use

## 🔑 Key Concepts

| Concept | What it means |
|---|---|
| Props | Data passed from parent → child component |
| Read-only | Props can never be modified inside the component |
| Destructuring | `function Card({ title, age })` - cleaner than `props.title` |
| Default props | Fallback value if no prop is passed |
| Dynamic UI | Same component, different data = different output |

## 🔁 How Props Flow
```
App.jsx  →  passes props  →  Card.jsx
                                ↓
                          uses props to render UI
```

## 🆚 With vs Without Destructuring

| Without | With |
|---|---|
| `function Card(props)` | `function Card({ title, age })` |
| `props.title` | `title` |
| More typing 😐 | Cleaner and easier ✅ |

## 💡 One-Liner
> Props are just arguments you pass to a component - like passing data into a function. 🎯