const StaticComponent = () => {
  const items = [
    "Atlético de Madrid",
    "Real Madrid",
    "Barcelona",
    "Sevilla",
    "Real Sociedad",
  ];
  return (
    <section>
      <h1>Teams List</h1>
      <ul>
        {items.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    </section>
  );
};

export default StaticComponent;
