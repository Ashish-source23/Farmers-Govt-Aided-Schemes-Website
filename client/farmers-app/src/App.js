import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Importing all the components
import Header from "./components/header/header";
// import Navbar from "./components/navbar/navbar";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Home from "./components/home/home";
import Cropfeed from "./components/feed/cropfeed";
import Schemefeed from "./components/feed/schemefeed";
import PrivateComponent from "./components/privateComponent/privateComponent";
import Profile from "./components/profile/profile";
import Addcrop from "./components/add/addcrop";
// import New from "./components/add/new";
import Addscheme from "./components/add/addscheme";
import Deletescheme from "./components/delete/deletescheme";
import Addphotos from "./components/add/addphotos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          {/* <Navbar /> */}
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/profile" element={<Profile />} />
              {/* Crops */}
              <Route path="/addcrops" element={<Addcrop />} />
              {/* Scheme */}
              <Route path="/addscheme" element={<Addscheme />} />
              <Route path="/deletescheme" element={<Deletescheme />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="crops/" element={<Cropfeed />} />
            <Route path="scheme/" element={<Schemefeed />} />
            <Route path="signup/" element={<SignUp />} />
            <Route path="login/" element={<Login />} />
            <Route path="/photos" element={<Addphotos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
