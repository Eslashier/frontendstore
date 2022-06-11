import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/NavBar"
import Footer from "./components/Footer";
import "./App.css"
import RoutesSite from "./routes/RoutesSite";


function App() {
  // const logged = useSelector((state: RootState) => state.logging.isLogged)
  return (
    <BrowserRouter>
      <Navbar />
        <RoutesSite />
        <br/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
