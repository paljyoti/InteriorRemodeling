import "./App.css";
import Aboutus from "./component/Aboutus";
import Card from "./component/Card";
import Custom from "./component/Custom";
import Header from "./component/Header";
import Navbar from './component/Navbar'
import ProCate from "./component/ProCate";
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
      <ProCate/>
      <Custom/>
      <Card/>
    </div>
  );
}

export default App;
