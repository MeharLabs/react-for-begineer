// 11 - Event Handling as Props 📤

//  Child component - receives handler as prop
function Button({ label, onButtonClick }) {
  return <button onClick={onButtonClick}>{label}</button>;
}

//  Child with data - passes value back to parent
function DeleteButton({ id, name, onDelete }) {
  return <button onClick={() => onDelete(id)}>🗑️ Delete {name}</button>;
}

//  Parent - defines all handlers
function App() {
  function handleClick() {
    alert("🔥 Button clicked from parent!");
  }

  function handleDelete(id) {
    console.log(`🗑️ Deleting item with id: ${id}`);
  }

  const users = [
    { id: 1, name: "TheCloudy" },
    { id: 2, name: "John Doe" },
    { id: 3, name: "Jane Smith" },
  ];

  return (
    <div>
      {/*  Passing handler as prop */}
      <Button label="Click Me 🚀" onButtonClick={handleClick} />

      {/*  Passing handler with data */}
      {users.map((user) => (
        <DeleteButton
          key={user.id}
          id={user.id}
          name={user.name}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
