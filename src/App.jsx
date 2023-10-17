import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import RoutesFile from "./RoutesFile";
import Categories from "./pages/GenericCategory";
import LoadingSpin from "react-loading-spin";
import Top from "./Components/header/Top";
import Footer from "./Components/footer/Footer";
function App() {

  return (
    <>
       <RoutesFile />
    </>
  );
}

export default App;
