import mysql from 'mysql2/promise'

import env from 'dotenv'
env.config();
 const requireEnvVars = [
    'DB_USER',
    'DB_HOST',
    'DB_PASSWORD',
    'DB_PORT',
    'DB_DATABASE'
]
 requireEnvVars.forEach((varName) =>{
    if(!process.env[varName]){
        console.log(`missing required env variable: ${varName}`);
        process.exit(1);
    }
 });
  
 const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "employee_management",
    port: process.env.DB_PORT,
    enableKeepAlive: true,          
    keepAliveInitialDelay: 10000  
 })
 try {
    const connection = await db.getConnection();
    console.log("Database connected successfully");
    connection.release();
} catch (error) {
    console.log("Connection error:", error);
    process.exit(1);
}


db.on("error", (err) =>{
    console.log("Database error:", err);
});
export  const query = (text, params) => db.query(text, params)
