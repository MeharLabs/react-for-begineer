function Welcome() {
  return <h2>Welcome, Mehar!</h2>;
}

function Button(){
  return <button>Click Me</button>
}

function App() {
  return (
    <div>
      <h1>🚀 Hello, React!</h1>
      <p>My first React app. Built with Vite. Let's goo!</p>

      <Welcome />
      <Button />

    </div>
  );
}

export default App;
