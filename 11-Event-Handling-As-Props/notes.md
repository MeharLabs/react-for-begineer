# 📘 11 Event Handling as Props

## 🧠 What to Learn

- You can pass **event handler functions as props** from parent to child
- This is how a child component **communicates back to the parent**
- The parent defines the function, child just **calls it**
- This pattern is called **lifting state up** very common in real React apps
- Handler props are usually named with `on` prefix `onButtonClick`, `onDelete`, `onSubmit`
- The child doesn't care what the function does it just calls it when needed

## 🔑 Key Concepts

| Concept                | What it means                                             |
| ---------------------- | --------------------------------------------------------- |
| Handler as prop        | Passing a function from parent → child                    |
| Child calls it         | Child triggers the function via an event                  |
| `on` prefix            | Naming convention for handler props `onClick`, `onDelete` |
| Lifting state up       | Child communicates to parent via passed functions         |
| Separation of concerns | Child handles UI, parent handles logic                    |

## 🔁 The Flow

```
Parent defines function
      ↓
passes it as prop to Child
      ↓
Child calls it on event
      ↓
Parent function runs
```

## 🆚 Wrong vs Right

| ❌ Wrong                          | ✅ Right                                  |
| --------------------------------- | ----------------------------------------- |
| Child manages its own logic       | Parent manages logic, child just triggers |
| Random prop names                 | Use `on` prefix `onDelete`, `onSubmit`    |
| Calling function `onClick={fn()}` | Pass reference `onClick={fn}`             |

## 🎯 One-Liner

> Pass functions as props so the child can talk back to the parent that's how React components communicate.
