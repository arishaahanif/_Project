// 11import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import Header from"./components/Header";
import Center from "./components/Cenetr";
import Reviews from "./components/Reviews";
import Slick from "./components/Slick";
import Services from "./components/Services"


function App() {
  return (
    <div className="App">
      <Header/>
      <Center/>
      <Reviews/>
      <Slick/>
      <Services/>
    </div>
  );
}

export default App;
