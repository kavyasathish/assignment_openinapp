import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from ".././src/components/header";
import Sidenavbar from ".././src/components/sidenavbar";
import UploadSection from ".././src/components/uploadsection";
import Table from "./components/table";

const App = () => {
  return (
    <Router>
      <div className="app" style={{ display: "flex" }}>
        <Sidenavbar />
        <div
          className="main-content"
          style={{ flex: 1, display: "flex", flexDirection: "column" , backgroundColor:"#FAFAFB" }}
        >
          <Header />
          <UploadSection />
          <Table />
          <Routes>
            <Route path="/uploads" element={<UploadSection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
