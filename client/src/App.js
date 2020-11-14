import './App.css';
import Main from "./views/Main";
import OnePet from "./views/OnePet";
import NewPet from "./views/AddPet";
import UpdatePet from "./views/UpdatePet";
import { Router } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1 className="jumbotron">Pet Shelter</h1>
      <Router>
        <Main path="/" />
        <OnePet path="/pets/:_id" />
        <NewPet path="/new" />
        <UpdatePet path="/pets/update/:_id" />
      </Router>
    </div>
  );
}

export default App;
