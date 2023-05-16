import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Importing all the components
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Feed from "./components/feed/feed";
import Scheme from "./components/scheme/scheme";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Home from "./components/home/home";
import PrivateComponent from "./components/privateComponent/privateComponent";
import Profile from "./components/profile/profile";
import Addcrop from "./components/addcrop/addcrop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Navbar />
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/addcrops" element={<Addcrop />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="crops/" element={<Feed />} />
            <Route path="scheme/" element={<Scheme />} />
            <Route path="signup/" element={<SignUp />} />
            <Route path="login/" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
