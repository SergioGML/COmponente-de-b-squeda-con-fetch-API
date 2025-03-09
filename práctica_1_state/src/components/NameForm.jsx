import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <section>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ boxSizing: "border-box", width: "100%", padding: "0.5rem" }}
      />
      <h2>¡Hola {name || "visitante"}!</h2>
    </section>
  );
}

export default NameForm;
