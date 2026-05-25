// 08 - Rendering Lists 📋

const users = [
  { id: 1, name: "TheCloudy", role: "Frontend Dev" },
  { id: 2, name: "John Doe", role: "Backend Dev" },
  { id: 3, name: "Jane Smith", role: "Designer" },
];

const skills = ["React", "JavaScript", "CSS", "Git"];

//  List from array of objects
function UserList() {
  return (  
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> — {user.role}
        </li>
      ))}
    </ul>
  );
}

//  List from simple array — index ok here since list never changes
function SkillList() {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>⚡ {skill}</li>
      ))}
    </ul>
  );
}

//  App
function App() {
  return (
    <div>
      <h2>👥 Users</h2>
      <UserList />
      <h2>🛠️ Skills</h2>
      <SkillList />
    </div>
  );
}

export default App;
