import "./App.css";
import Aboutus from "./component/Aboutus";
import Header from "./component/Header";
import Navbar from './component/Navbar'
import Service from './component/Service'
import View from "./component/View";

function App() {
  return (
    <div className="relative w-full h-full">
      <Navbar/>
      <Header />
      <Aboutus />
      <Service/>
      <View/>
    </div>
  );
}

export default App;
