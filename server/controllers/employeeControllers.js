import { query } from "../utils/connectDB.js";

import { 
    createEmployeeTableQuery, 
    createEmployeeQuery, 
    deleteEmployeeQuery, 
    updateEmployeeQuery, 
    getAllEmployeeQuery, 
    getEmployeeQuery 
} from "../utils/sqlQuery.js";

const getAllEmployee = async (req, res, next) => {
    try {
        const [response] = await query("SHOW TABLES LIKE 'employee_details'");
        console.log(response);

        if (response.length === 0) {
            await query(createEmployeeTableQuery);
        }

        const [rows] = await query(getAllEmployeeQuery);
        res.json(rows);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};

const getEmployee = async (req, res, next) => {
    try {
        const id = req.params.id;
        const [rows] = await query(getEmployeeQuery, [id]);

        if (!rows || rows.length === 0) {
            return res.status(404).json({ error: "Employee not found" });
        }   
        res.json(rows[0]);
    } catch (error) {
        next(error);
    }
};

const deleteEmployee = async (req, res, next) => {
    try {
        const id = req.params.id;
        const [result] = await query(deleteEmployeeQuery, [id]);   // ✅ destructure here

        const rowCount = result.affectedRows;

        if (!rowCount) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.json({ message: "Employee deleted successfully" });
    } catch (error) {
        next(error);
    }
};
const updateEmployee = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, role, department, status } = req.body;

       
        const [result] = await query(updateEmployeeQuery, [name, email, role, department, status, id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Employee not found" });
        }
        
        res.json({ message: "Employee updated successfully" });
    } catch (error) {
        console.log("Update Error:", error.message);
        next(error);
    }
};

const createEmployee = async (req, res, next) => {
    try {
        const { name, email, role, department, status } = req.body;

        if (!name || !email || !role || !department || !status) {
            return res.status(400).json({ error: "Missing required fields" });
        } 

        
        const [result] = await query(createEmployeeQuery, [name, email, role, department, status]);

        if (result.affectedRows === 0) {
            return res.status(400).json({ error: "Failed to create employee" });
        }

        res.status(201).json({ message: "Employee created successfully" });
    } catch (error) {
        console.log("Create Error:", error.message);
        res.status(500).json({ error: error.message });
    }
};
export { getAllEmployee, getEmployee, deleteEmployee, updateEmployee, createEmployee };