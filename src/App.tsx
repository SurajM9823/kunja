import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import EventsNewsPage from './pages/EventsNewsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/history" element={<AboutPage />} />
            <Route path="/about/mission-vision" element={<AboutPage />} />
            <Route path="/about/principal-message" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/academics/nursery-kg" element={<AcademicsPage />} />
            <Route path="/academics/primary" element={<AcademicsPage />} />
            <Route path="/academics/middle-school" element={<AcademicsPage />} />
            <Route path="/academics/secondary" element={<AcademicsPage />} />
            <Route path="/academics/higher-secondary" element={<AcademicsPage />} />
            <Route path="/events-news" element={<EventsNewsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/admissions/process" element={<AdmissionsPage />} />
            <Route path="/admissions/requirements" element={<AdmissionsPage />} />
            <Route path="/admissions/fees" element={<AdmissionsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
