// 07 - Conditional Rendering 🔀

const isLoggedIn = true;
const hasNotifications = true;
const score = 85;

//  if/else outside return
function Greeting() {
  if (isLoggedIn) {
    return <h2>👋 Welcome back, John!</h2>;
  } else {
    return <h2>🔒 Please log in</h2>;
  }
}

//  Ternary - either/or inside JSX
function Status() {
  return <p>{isLoggedIn ? "🟢 Online" : "🔴 Offline"}</p>;
}

//  && - show only if true
function Notifications() {
  return <div>{hasNotifications && <p>🔔 You have new notifications!</p>}</div>;
}

//  Multiple conditions - ternary chaining
function ScoreCard() {
  return (
    <p>
      Result:{" "}
      {score >= 90 ? "🏆 Excellent" : score >= 70 ? " Passed" : "❌ Failed"}
    </p>
  );
}

//  App - uses all above
function App() {
  return (
    <div>
      <Greeting />
      <Status />
      <Notifications />
      <ScoreCard />
    </div>
  );
}

export default App;
