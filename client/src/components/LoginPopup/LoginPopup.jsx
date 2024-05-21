import React, { useState } from "react";

const LoginPopup = () => {
  const [login, setLogin] = useState("Sign Up");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="bg-red-600 w-full h-1/2">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="...." />
        <button type="submit">{login}</button>
      </form>
    </div>
  );
};

export default LoginPopup;
