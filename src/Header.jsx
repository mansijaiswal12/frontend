import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-2 bg-gray-100 ">
      {/* Left side (Phone and Email) */}
      <div className="flex items-center space-x-4 text-sm ms-44 text-gray-600">
        <span>📞 +123-456-7890</span>
        <span>✉️ support@example.com</span>
      </div>

      {/* Right side (Login and Registration) */}
      <div className="flex items-center space-x-4 me-96">
        <button className="text-sm hover:text-blue-500">Login</button>
        <button className="text-sm hover:text-blue-500">Register</button>
      </div>
      
    </header>
  );
}

export default Header;
