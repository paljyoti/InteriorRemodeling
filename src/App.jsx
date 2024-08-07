import "./App.css";
import Aboutus from "./component/Aboutus";
import Card from "./component/Card";
import Custom from "./component/Custom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from './component/Navbar'
import ProCate from "./component/ProCate";
import Service from './component/Service'
import Update from "./component/Update";
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
      <Update/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
