function App() {
  return (
    <div>
      <Person
        name="Homer"
        age={38}
        hobbies={["bowling", "watching tv", "drinking beer"]}
      />
      <Person name="Craif" age={34} hobbies={["painting", "gambling"]} />
      <Person
        name="Bart"
        age={10}
        hobbies={["skateboarding", "making prank calls"]}
      />
      <Person
        name="Susan"
        age={8}
        hobbies={["reading", "saxophone", "eating"]}
      />
    </div>
  );
}
