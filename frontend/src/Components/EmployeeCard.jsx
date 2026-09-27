import React from 'react';
import { MdOutlineDeleteOutline, MdModeEditOutline } from "react-icons/md";
import { deleteEmployee } from '../services/employeeApi';
import EmployeeForm from './EmployeeForm';


const EmployeeCard = ({ employee, onChanged }) => {
  const handleDelete = async () => {
    await deleteEmployee(employee.id); // API request
    onChanged(); // tell EmployeeList to reload the list
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-800">{employee.name}</h3>
        {/* conditional rendering: pick a color based on status */}
        <span className={`px-2 py-1 rounded text-xs font-medium ${
          employee.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
        }`}>
          {employee.status}
        </span>
      </div>
      <p className="text-sm text-gray-500">{employee.email}</p>
      <p className="text-sm text-gray-600">{employee.role}</p>
      <p className="text-sm text-gray-600">{employee.department}</p>

      <div className="flex items-center gap-3 pt-2">
       
        <button onClick={handleDelete} className="p-2 rounded-lg hover:bg-red-50 text-red-600">
          <MdOutlineDeleteOutline />
        </button>
        <EmployeeForm mode="update" employee={employee} onSaved={onChanged}>
          <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
            <MdModeEditOutline />
          </button>
        </EmployeeForm>
      </div>
    </div>
  );
};

export default EmployeeCard;