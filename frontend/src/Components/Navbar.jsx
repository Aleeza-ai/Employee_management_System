import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? 'bg-indigo-600 text-white shadow-sm'
        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
    }`;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-semibold text-sm">
            E
          </div>
          <span className="text-lg font-semibold text-slate-800">EMS</span>
        </div>
        <div className="flex gap-1">
          <NavLink to="/" end className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;