import "./App.css";
import Header from "./Component/Header/Nav";
import Plan from "./Component/Plan/SelectPlan";
import SetupGuide from "./Component/Setup guide/SetupGuide";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Plan />
        <SetupGuide/>
      </main>
    </div>
  );
}

export default App;
