import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Portfolio from "./pages/Portfolio";
import Loader from "./components/Loader";
import ToastCenter from "./components/ToastCenter";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      )}
      <ToastCenter />
    </div>
  );
}

export default App;
