import React from 'react';
import Navbar from './components/Navbar';
import './app.css';
import Head from './components/Head';
import IntroductionSection from './components/IntroductionSection';
import ChooseUsSection from './components/ChooseUsSection';
import AreaOfPracticeSection from './components/AreaOfPracticeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App bg-lightGray flex flex-col items-center'>
      <div className='w-full flex flex-col items-center bg-darkGray py-12 lg:py-36 lg:h-screen'>
        <Navbar />
        <Head />
      </div>
      <IntroductionSection />
      <ChooseUsSection />
      <AreaOfPracticeSection />
      <Footer />
    </div>
  );
}

export default App;
