import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary.jsx';
import Footer from './components/layout/Footer.jsx';
import Navbar from './components/layout/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import MemoryTreePage from './pages/MemoryTreePage.jsx';
import StudentProfilePage from './pages/StudentProfilePage.jsx';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="app-shell">
          <Navbar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/memory-tree" element={<MemoryTreePage />} />
              <Route path="/students/:studentId" element={<StudentProfilePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
