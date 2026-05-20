// DEFAULT Exports
function Button(){
  return <button>Click me</button>
  
}

export default Button

// Or (second way)
const Button = () => {
  return <button>Click me</button>
}

export default Button

// NAMED Exports
export const Button = () => {
  return <button>Click me</button>
}