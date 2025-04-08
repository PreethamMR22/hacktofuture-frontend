import { useState } from 'react';
import './App.css';
import SliderForm from './components/SliderForm';
import HeroContent from './components/HeroContent';

const App = () => {
  const [activeForm, setActiveForm] = useState(null); // 'login' | 'signup' | null

  return (
    <div className="main-container">
      <div className="overlay" />
      <HeroContent onOpen={setActiveForm} slideDirection={activeForm} />
      {activeForm && (
        <SliderForm type={activeForm} onClose={() => setActiveForm(null)} />
      )}
    </div>
  );
};

export default App;
