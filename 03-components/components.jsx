// 03 - Components 🧱

// Header Component
function Header() {
  return (
    <header>
      <h1>⚛️ My React App</h1>
      <p>Learning React in public 🚀</p>
    </header>
  )
}

// MainContent Component
function MainContent() {
  return (
    <main>
      <h2>👋 Welcome!</h2>
      <p>This is the main content area of my app.</p>
    </main>
  )
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>Made with ❤️ while learning React</p>
    </footer>
  )
}

// Root Component — uses all components above
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App