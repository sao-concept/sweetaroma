import "./App.scss";
import NavbarComponent from "../NavbarComponent/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent
        setShowLoginPage={setShowLoginPage}
        setUserData={setUserData}
      />
    </div>
  );
}

export default App;
