import { Container } from "react-bootstrap";

import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import EventEditScreen from "./screens/EventEditScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/register" element={<RegisterScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
            <Route exact path="/event/:id/create" element={<EventEditScreen />} />
          </Routes>
        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
