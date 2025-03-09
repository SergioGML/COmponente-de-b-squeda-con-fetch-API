import Counter from "./components/Counter";
import ToggleButton from "./components/ToggleButton";
import NameForm from "./components/NameForm";
import "./App.css";
import CounterUseEffect from "./components/CounterUseEffect";

function App() {
  return (
    <>
      <section style={{ marginBottom: "1rem", backgroundColor: "lightgray", padding: "1rem" }}>
        <h2>Contador</h2>
        <Counter />
      </section>
      <section style={{ marginBottom: "1rem", backgroundColor:"blueviolet", padding: "1rem" }}>
        <ToggleButton />
      </section>
      <section style={{ marginBottom: "1rem", backgroundColor: "lightgray", padding: "1rem" }}>
        <h1>Formulario de nombre</h1>
        <NameForm />
      </section>
      <section style={{ marginBottom: "1rem", backgroundColor:"blueviolet", padding: "1rem", color: "white" }}>
        <CounterUseEffect />
      </section>
    </>
  );
}

export default App;
