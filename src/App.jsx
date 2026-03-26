import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout & Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Classes from './pages/Classes';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FreeTrial from './pages/FreeTrial';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="classes" element={<Classes />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="membership" element={<Membership />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="free-trial" element={<FreeTrial />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
