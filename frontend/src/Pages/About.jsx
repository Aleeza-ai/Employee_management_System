import React from 'react';

const About = () => {
  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto bg-gray-100 rounded-2xl shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#ffffff] p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">About This App</h1>
        <p className="text-gray-600 leading-relaxed">
          This Employee Management app lets you add, update, and remove employee
          records, backed by an Express + MySQL API on the backend and React +
          TanStack Query on the frontend.
        </p>
      </div>
    </div>
  );
};

export default About;