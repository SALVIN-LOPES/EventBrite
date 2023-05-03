import { Container } from "react-bootstrap";

import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import EventEditScreen from "./screens/EventEditScreen";
import ListAllEventsScreen from "./screens/ListAllEventsScreen";
import ListMyEventsScreen from "./screens/ListMyEventsScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/event/:id/create" element={<EventEditScreen />} />
            <Route path="/allevents" element={<ListAllEventsScreen />} />
            <Route path="/myevents" element={<ListMyEventsScreen />} />
          </Routes>
        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
