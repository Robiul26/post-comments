import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import PostDetail from "./Components/PostDetail/PostDetail";
function App() {


  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:postId/details" element={<PostDetail/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
