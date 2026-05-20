// 04 - Import & Export Components 📦

// This is how a separate component file looks

// DEFAULT Exports
function Welcome() {
  return <h2>Welcome</h2>
}

export default Welcome

// Or (second way)
const Welcome = () => {
  return <h2>Welcome</h2>
}

export default Welcome

// NAMED Exports
export const Welcome = () => {
  return <h2>Welcome</h2>
}