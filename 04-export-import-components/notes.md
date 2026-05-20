# 📘 04 - Import & Export Components

## 🧠 What to Learn
- Components can be split into **separate files** - one component per file
- Use `export default` to export a component from a file
- Use `import` to bring that component into another file
- This keeps your code **clean and organized** as your app grows
- File name and component name are usually the **same** (e.g. `Header.jsx` → `Header`)
- All components eventually get imported into `App.jsx`

## 🔑 Key Concepts

| Concept | What it means |
|---|---|
| `export default` | Makes a component available to other files |
| `import` | Brings a component into the current file |
| Named export | `export function Header()` - must import with `{ }` |
| Default export | `export default Header` - import without `{ }` |
| File per component | Best practice - one component per `.jsx` file |

## 🔁 The Flow
```
Header.jsx        →     export default Header
                              ↓
App.jsx           →     import Header from './Header'
                              ↓
                        <Header /> used in JSX
```

## 🆚 Default vs Named Export

| | Default Export | Named Export |
|---|---|---|
| Syntax | `export default Header` | `export function Header()` |
| Import | `import Header from './Header'` | `import { Header } from './Header'` |
| Per file | Only ONE default export | Multiple named exports allowed |


## 💡 One-Liner
> Split components into separate files, export them, import them where needed - that's how real React apps are structured.