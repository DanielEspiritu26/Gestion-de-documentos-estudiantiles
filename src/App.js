import Inicio from "./Screens/Inicio";
import CargaDocs from "./Screens/CargaDocs";
import DocsCarg from "./Screens/DocsCarg";
import ChatEnLinea from "./Screens/Chat";
import Contacto from "./Screens/Contacto";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <CargaDocs />
      <DocsCarg />
      <ChatEnLinea />
      <Contacto />
    </div>
  );
}

export default App;
