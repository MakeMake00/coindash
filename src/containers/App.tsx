import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import ChartsRoute from "routes/Charts";
import AboutRoute from "routes/About";


export default function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        
        <AppContainer>

          <Routes>
            <Route path="/about" element={<AboutRoute />} />
            <Route path="/" element={<ChartsRoute />} />
          </Routes>

        </AppContainer>
      </div>
    </Router>
  );
}
