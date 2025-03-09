import Card from "./components/Login/Login";
import Button from "./components/Login/Styled-Components/Button";
import Tailwind from "./components/Login/Tailwind/Tailwind";

function App() {
  return (
    <div>
      <Card theme="light" />
      <Card theme="dark" />
      <Button blue white><h1>Azul</h1></Button>
      <Button white><h1>Gris</h1></Button>
      <Tailwind />
    </div>
  );
}

export default App;

