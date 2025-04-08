import './HeroContent.css';

const HeroContent = ({ onOpen, slideDirection }) => {
  const slideClass =
    slideDirection === 'login'
      ? 'slide-right'
      : slideDirection === 'signup'
      ? 'slide-left'
      : '';

  return (
    <div className={`hero-container ${slideClass}`}>
      <div className="hero-main">
        <h1 className="logo-text">SDoHSense</h1>
        <h2>Empowering Healthcare Through Smart Data</h2>
        <p>
          Welcome to the BBHS Dashboard. Our platform brings together critical health data such as
          unemployment rates, literacy levels, eviction trends, and population density to empower
          better decision-making in hospitals and public health services. Designed for speed, accuracy,
          and ease-of-use, we help hospitals work smarter — not harder.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn" onClick={() => onOpen('login')}>Login</button>
          <button className="hero-btn secondary" onClick={() => onOpen('signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
