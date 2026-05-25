// 10 - Handling Events 🖱️

//  Separate handler function
function ButtonClick() {
  function handleClick() {
    alert("🔥 Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

//  Inline handler
function InlineClick() {
  return (
    <button onClick={() => console.log("👆 Inline click!")}>
      Inline Click
    </button>
  );
}

//  Event object - e
function EventObject() {
  function handleClick(e) {
    console.log("Event type:", e.type);
    console.log("Target:", e.target);
  }

  return <button onClick={handleClick}>Log Event</button>;
}

//  onChange - input
function InputChange() {
  function handleChange(e) {
    console.log("Typed:", e.target.value);
  }

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Type something..."
    />
  );
}

//  onSubmit - form
function FormSubmit() {
  function handleSubmit(e) {
    e.preventDefault(); // ← stops page reload
    console.log(" Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
}

//  App
function App() {
  return (
    <div>
      <ButtonClick />
      <InlineClick />
      <EventObject />
      <InputChange />
      <FormSubmit />
    </div>
  );
}

export default App;
