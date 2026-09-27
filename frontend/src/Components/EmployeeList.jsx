import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/employeeApi';
import EmployeeCard from './EmployeeCard';
import EmployeeForm from './EmployeeForm';

const EmployeeList = () => {
  
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const loadEmployees = async () => {
    const data = await getEmployees(); // API request
    setEmployees(data);
    setLoading(false);
  };

  
  useEffect(() => {
    loadEmployees();
  }, []);

  
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Employee Management</h1>
        <EmployeeForm mode="add" onSaved={loadEmployees}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Employee</button>
        </EmployeeForm>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}          
            onChanged={loadEmployees}    
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;