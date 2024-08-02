import "./App.css";
import Aboutus from "./component/Aboutus";
import Header from "./component/Header";
// import Navbar from './component/Navbar'
// import Service from './component/Service'

function App() {
  return (
    <div className="relative w-full h-full">
      {/* <Navbar/> */}
      <Header />
      <Aboutus />
      {/* <Service/> */}
    </div>
  );
}

export default App;
