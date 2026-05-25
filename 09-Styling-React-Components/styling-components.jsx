// 09 - Styling React Components 🎨

//  1. Inline Styles - JS object, camelCase
function InlineStyled() {
  return (
    <h2 style={{ color: "tomato", fontSize: "24px", fontWeight: "bold" }}>
      🎨 Inline Styled Heading
    </h2>
  );
}

//  2. CSS File - import and use className
// Make file & import './App.css'
function CSSStyled() {
  return <p className="highlight">📄 Styled with CSS file</p>;
}

//  3. CSS Modules - scoped to this component only
// Make file & import styles from './Card.module.css'
function CSSModuleStyled() {
  return (
    // <p className={styles.title}>🧩 Styled with CSS Module</p>
    <p>🧩 CSS Module example - see Card.module.css</p>
  );
}

//  4. Dynamic inline style - based on a value
function DynamicStyled({ isActive }) {
  return (
    <p style={{ color: isActive ? "green" : "red" }}>
      Status: {isActive ? "🟢 Active" : "🔴 Inactive"}
    </p>
  );
}

//  App
function App() {
  return (
    <div>
      <InlineStyled />
      <CSSStyled />
      <CSSModuleStyled />
      <DynamicStyled isActive={true} />
      <DynamicStyled isActive={false} />
    </div>
  );
}

//  Inline style
const headingStyle = {
  color: "tomato",
  fontSize: "28px",
  fontWeight: "bold",
};

//  Dynamic style
const isActive = true;

function App() {
  return (
    <div>
      {/*  Inline style via object */}
      <h1 style={headingStyle}>🎨 Styling in React</h1>

      {/*  className - make sure class exists in App.css */}
      <p className="subtitle">Styled with CSS file</p>

      {/*  Dynamic style based on value */}
      <p style={{ color: isActive ? "green" : "red" }}>
        Status: {isActive ? "🟢 Active" : "🔴 Inactive"}
      </p>
    </div>
  );
}

export default App;
