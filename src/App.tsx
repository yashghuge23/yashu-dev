/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Workflow from './components/Workflow';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="antialiased min-h-screen flex flex-col bg-grid relative overflow-x-hidden" id="app-root">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Journey />
        <Workflow />
        <HireMe />
        <Contact />
      </main>

      {/* Footer copyright and info */}
      <Footer />
    </div>
  );
}

