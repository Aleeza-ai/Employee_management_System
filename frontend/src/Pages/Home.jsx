import React from 'react';
import EmployeeList from '../Components/EmployeeList';

const Home = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <EmployeeList />
      </div>
    </div>
  );
};

export default Home;