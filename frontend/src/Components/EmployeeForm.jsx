import React, { useState } from 'react';
import { addEmployee, updateEmployee } from '../services/employeeApi';

const emptyForm = { name: "", email: "", department: "", role: "", status: "" };

const EmployeeForm = ({ children, mode = "add", employee, onSaved }) => {
  const [open, setOpen] = useState(false); 
  
  const [info, setInfo] = useState(mode === "add" ? emptyForm : employee);

  
  const handleChanges = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!info.name || !info.email || !info.department || !info.role || !info.status) {
      alert("Please fill all the fields");
      return;
    }

    if (mode === "add") {
      await addEmployee(info); 
      setInfo(emptyForm); 
    } else {
      await updateEmployee(info); 
    }

    setOpen(false);
    onSaved(); 
  };

  return (
    <div>
      <div onClick={() => setOpen(true)}>{children}</div>

      
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/40" />
          <div className="relative w-full max-w-md mx-4 bg-white rounded-xl p-6 shadow-xl">
            <h2 className="text-lg font-semibold mb-4">
              {mode === "add" ? "Add Employee" : "Update Employee"}
            </h2>

            <div className="space-y-3">
              
              <input name="name" placeholder="Name" value={info.name} onChange={handleChanges} className="w-full border border-gray-200 rounded-lg px-3 py-2" />
              <input name="email" placeholder="Email" value={info.email} onChange={handleChanges} className="w-full border border-gray-200 rounded-lg px-3 py-2" />
              <input name="department" placeholder="Department" value={info.department} onChange={handleChanges} className="w-full border border-gray-200 rounded-lg px-3 py-2" />

              <select name="role" value={info.role} onChange={handleChanges} className="w-full border border-gray-200 rounded-lg px-3 py-2">
                <option value="">Select Role</option>
                <option value="HR">HR</option>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
                <option value="Intern">Intern</option>
              </select>

              <select name="status" value={info.status} onChange={handleChanges} className="w-full border border-gray-200 rounded-lg px-3 py-2">
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg border border-gray-200">Cancel</button>
              <button onClick={handleSubmit} className="px-4 py-2 rounded-lg bg-blue-500 text-white">
                {mode === "add" ? "Add" : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;