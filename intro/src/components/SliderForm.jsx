import './SliderForm.css';
import { SignIn, SignUp } from "@clerk/clerk-react";

const SliderForm = ({ type, onClose }) => {
  const isLogin = type === 'login';

  return (
    <div className={`form-slider ${isLogin ? 'left' : 'right'}`}>
      <div className="form-content">
        <button className="close-btn" onClick={onClose}>×</button>
        {/* <h2>{isLogin ? 'Login to Your Account' : 'Create New Account'}</h2> */}
        {isLogin ? <SignIn routing="hash" /> : <SignUp routing="hash" />}
      </div>
    </div>
  );
};

export default SliderForm;
