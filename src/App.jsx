import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import ProfileGallery from "./components/ProfileGallery";
import SetupDate from "./components/SetupDate";

function App() {
  return (
      <div>
          <Header />
          <div className="container-fluid">
              <div className="row">
                  <BrowserRouter>
                      <Routes>
                          <Route exact path="/" element={<ProfileGallery />} />
                          <Route exact path="/date" element={<SetupDate />} />
                          <Route path="*" element={<Navigate to="/" />} />
                      </Routes>
                  </BrowserRouter>
                  <Outlet />
              </div>
          </div>
          <Footer />
      </div>
  );
}

export default App;
