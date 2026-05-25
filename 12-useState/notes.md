# 📘 12 - useState

## 🧠 What to Learn

- `useState` is a **React Hook** that lets a component remember values
- Without state, UI never updates - it's just static
- `useState` returns two things - the **current value** and a **setter function**
- Always use the setter function to update state - never modify state directly
- Every time state updates, React **re-renders** the component automatically
- `useState` can hold any data type - string, number, boolean, array, object
- Hook rules - only call `useState` at the **top level** of a component, never inside loops or conditions

## 🔑 Key Concepts

| Concept         | What it means                                    |
| --------------- | ------------------------------------------------ |
| `useState`      | Hook that adds memory to a component             |
| Current value   | The actual state value - `count`                 |
| Setter function | Updates the state - `setCount`                   |
| Re-render       | React updates the UI every time state changes    |
| Initial value   | The starting value passed to `useState(0)`       |
| Immutability    | Never do `count = count + 1` - always use setter |

## 🔁 How it Works

```
const [count, setCount] = useState(0)
        ↓           ↓
  current value   setter function
```

## 🆚 Wrong vs Right

| ❌ Wrong                   | ✅ Right                         |
| -------------------------- | -------------------------------- |
| `count = count + 1`        | `setCount(count + 1)`            |
| `useState` inside if block | `useState` at top level only     |
| Mutating objects directly  | Always create a new object/array |

## 🎯 One-Liner

> `useState` gives your component memory - change the state, React re-renders the UI automatically. 
