// import About from './About';
import Alert from './Alert';
import './App.css';
import Navbars from './componants/Navbars';
import TextForm from './TextForm';
import About from './About';
import { useState } from 'react';
import Practise from './componants/paractise'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type1: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode has been enable", "Succes:");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" light mode has been enable", "Succes:");
    }
  }

  return (
    <>
      {/* <Navbars title = "React"/> */}
      {/* <Navbars /> */}
      <Router>
        <Navbars title="React" aboutText="Abour Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Lower to Upper|Remove extra spaces|Clear text|Copy text" mode={mode} />}></Route>
            <Route exact path="/my-app" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Lower to Upper|Remove extra spaces|Clear text|Copy text " mode={mode} />}></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Lower to Upper|Remove extra spaces|Clear text|Copy text" mode={mode} />}> </Route>
          </Routes>
        </div>
      </Router>
      <practise/>
    </>
  )
}

export default App;
