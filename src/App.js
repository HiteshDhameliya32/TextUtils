import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter,Route, Routes
} from "react-router-dom";

function App() {

 const [mode, setMode] = useState('light');
 const [alert, setalert] = useState(null);

 const showAlert = (message, type) =>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setalert(null);
    },1000);
 }

 const toggleMode = ()=>{
    if(mode === "light" )
    {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils- Dark Mode";


      setInterval(()=>{
        document.title = "TextUtils is amazing";
      },2000);

      setInterval(()=>{
        document.title = "Install TextUtils Now";
      },1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils- Light Mode";
    }
 }

  return (
    <>
      <div className="container my-3">
      <Alert alert = {alert}/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar Apptitle="TextUtils" mode={mode} toggleMode={toggleMode}/>}>
              <Route index element={<Home/>}></Route>
              <Route path="/about" mode={mode} element={<About />}/>
              <Route path="/textUtils" element={<TextForm showAlert={showAlert} mode={mode} heading = "" />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
