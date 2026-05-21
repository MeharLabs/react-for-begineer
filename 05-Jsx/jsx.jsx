// 05 - JSX ✍️

function JSXBasics() {
  const name = "John"
  const age = 22
  const isLearning = true

  return (
    // Single root element - using Fragment
    <>
      {/* Curly braces for JS expressions */}
      <h1>Hello, {name}! 👋</h1>
      <p>Age: {age}</p>

      {/* JS expression - ternary inside JSX */}
      <p>{isLearning ? "Currently learning React 🚀" : "Taking a break 😴"}</p>

      {/* className instead of class */}
      <p className="highlight">This uses className not class</p>

      {/* Self-closing tags */}
      <input type="text" placeholder="Type here..." />
      <br />

      {/* Inline styles — double curly braces */}
      <p style={{ color: "tomato", fontWeight: "bold" }}>Styled with JSX 🎨</p>
    </>
  )
}

export default JSXBasics

