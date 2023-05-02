import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../Components/Nav";
import Home from "../Components/Home";
import Blog from "../Components/Blog";
import Create from "../Components/Create";
import Edit from "../Components/Edit";
import Footer from "../Components/Footer";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Blog />} />
        <Route path="/create" element={<Create />} />
        <Route path="/posts/:id/edit" element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
