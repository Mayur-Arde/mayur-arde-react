import React from 'react';
import { Route, Routes } from 'react-router';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills/index';
import Contact from './Pages/Contact';
import Error from './Pages/404';

function App() {
  return (
    <section className="dark">
      <main className="bg-dark dark:bg-black text-gray-800 dark:text-gray-400 h-screen md:flex items-center justify-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Navbar />
        {/* <Skills/> */}
      </main>
    </section>
  );
}

export default App;
