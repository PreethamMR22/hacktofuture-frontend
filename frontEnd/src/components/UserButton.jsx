// src/components/UserButton.jsx
const UserButton = () => {
    return (
      <div className="user-button">
        <img
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="User"
          className="user-avatar"
        />
        <div className="user-info">
          <span className="user-name">Preetham M R</span>
          <span className="user-role">ISE Student</span>
        </div>
      </div>
    );
  };
  
  export default UserButton;
  