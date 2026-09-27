const backendUrl = "http://localhost:4000/api/employee";

export async function getEmployees() {
  const res = await fetch(backendUrl);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to fetch employees");
  return data;
}

export async function addEmployee(employee) {
  const res = await fetch(backendUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to add employee");
  return data;
}

export async function updateEmployee(employee) {
  const res = await fetch(`${backendUrl}/${employee.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to update employee");
  return data;
}

export async function deleteEmployee(id) {
  const res = await fetch(`${backendUrl}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to delete employee");
  return data;
}