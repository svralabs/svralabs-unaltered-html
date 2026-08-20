import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import StyleGuidePage from './pages/StyleGuidePage';
import LearningTable from './pages/LearningTable';
import PricingPage from './pages/PricingPage';
import LearningDashboard from './pages/LearningDashboard';
import ProfilePage from './pages/ProfilePage';
import LandingPage from './pages/LandingPage';

function ScreenBar() {
  const loc = useLocation();
  const navs = [
    { path: '/', label: 'StyleGuidePage' },
    { path: '/learningtable', label: 'LearningTable' },
    { path: '/pricingpage', label: 'PricingPage' },
    { path: '/learningdashboard', label: 'LearningDashboard' },
    { path: '/profilepage', label: 'ProfilePage' },
    { path: '/landingpage', label: 'LandingPage' }
  ];

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-1.5 overflow-x-auto max-w-[95vw]">
      <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest px-2 hidden sm:inline">Screens:</span>
      {navs.map((n) => {
        const active = loc.pathname === n.path;
        return (
          <Link
            key={n.path}
            to={n.path}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
              active
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {n.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider>
            <BrowserRouter>
              <ScreenBar />
              <div className="pt-10 min-h-screen">
                <Routes>
                  <Route path='/' element={<StyleGuidePage />} />
        <Route path='/learningtable' element={<LearningTable />} />
        <Route path='/pricingpage' element={<PricingPage />} />
        <Route path='/learningdashboard' element={<LearningDashboard />} />
        <Route path='/profilepage' element={<ProfilePage />} />
        <Route path='/landingpage' element={<LandingPage />} />
                  <Route path="*" element={<StyleGuidePage />} />
                </Routes>
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
