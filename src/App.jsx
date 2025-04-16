import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Loader from './components/Loader/Loader.jsx';

const MainPage = lazy(() => import('./pages/MainPage/MainPage.jsx'));

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* ... */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}
