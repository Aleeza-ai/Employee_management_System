
export const createEmployeeTableQuery = `
    CREATE TABLE IF NOT EXISTS  employee_details (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,

        role ENUM('Developer', 'Manager', 'Sales', 'Admin', 'Intern','HR') NOT NULL DEFAULT 'Intern',
         department VARCHAR(50) NOT NULL,
        status ENUM('Active', 'Inactive') NOT NULL DEFAULT 'Active'
    )
`;

export const getAllEmployeeQuery = `
    SELECT * FROM employee_details
`;

export const createEmployeeQuery = `
    INSERT INTO employee_details (name, email, role, department, status)
    VALUES (?, ?, ?, ?, ?)
`;

export const getEmployeeQuery = `
    SELECT * FROM employee_details
    WHERE id = ?
`;

export const deleteEmployeeQuery = `
    DELETE FROM employee_details
    WHERE id = ?
`;

export const updateEmployeeQuery = `
    UPDATE employee_details
    SET
        name = ?,
        email = ?,
        role = ?,
        department = ?,
        status = ?
    WHERE id = ?
`;