// 06 - Props 🎁

// Card component - receives props via destructuring
function Card({ name, role, isActive }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      {/* Boolean prop */}
      <p>Status: {isActive ? "🟢 Active" : "🔴 Inactive"}</p>
    </div>
  );
}

// App - passes props to Card
function App() {
  return (
    <div>
      {/* Same component, different data */}
      <Card name="TheCloudy" role="Frontend Dev" isActive={true} />
      <Card name="John Doe" role="Backend Dev" isActive={false} />
      <Card name="Jane Smith" role="Designer" isActive={true} />
    </div>
  );
}

export default App;
