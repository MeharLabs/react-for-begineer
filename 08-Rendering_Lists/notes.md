# 📘 08 - Rendering Lists

## 🧠 What to Learn
- In React you render lists using the JavaScript **`.map()`** method
- Each item in a list must have a **unique `key` prop** - React uses it to track items
- `key` should be a **unique string or number** - usually an `id` from your data
- Never use the **array index** as a key if the list can change (add/remove items)
- `.map()` loops over an array and returns JSX for each item
- Lists are usually rendered from an **array of objects**

## 🔑 Key Concepts

| Concept | What it means |
|---|---|
| `.map()` | Loops over array and returns JSX for each item |
| `key` prop | Unique identifier React uses to track list items |
| Array index as key | Avoid it - causes bugs when list changes |
| Array of objects | Most common data structure for lists |

## 🔁 The Flow
```
array of data
    ↓
.map() loops over it
    ↓
returns JSX for each item
    ↓
React renders the list
```

## 🆚 Wrong vs Right

| ❌ Wrong | ✅ Right |
|---|---|
| No `key` prop | Always add `key` prop |
| `key={index}` on dynamic list | `key={item.id}` |
| Using `forEach` | Use `.map()` - it returns JSX |

## 🎯 One-Liner
> Rendering lists in React is just `.map()` over an array and returning JSX for each item - always with a unique `key`. 