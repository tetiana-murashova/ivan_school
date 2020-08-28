import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { Route} from "react-router-dom";
import Home from "./pages/HomePage/Home";
import ContactUs from "./pages/ContactUs";
import Materials from "./pages/Materials";
import Timetable from "./pages/Timetable";
import Advices from "./pages/Advices";
import Gallery from "./pages/Gallery";
import Teachers from "./pages/Teachers";






function App() {
  return (

      <>




            <Header />




                  <Route path="/" exact component={Home} />
                  <Route path="/contacts" exact component={ContactUs} />
                  <Route path="/materials" exact component={Materials} />
                  <Route path="/timetable" exact component={Timetable} />
                  <Route path="/advices" exact component={Advices} />
                  <Route path="/gallery" exact component={Gallery} />
                  <Route path="/teachers" exact component={Teachers} />



  </>

  );
}

export default App;
