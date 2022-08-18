import React, { useState } from "react";
import { empData } from "../data/data";
import Edit from "./Edit";
import { Header } from "./Header";
import List from "./List";
import Swal from "sweetalert2";

export const Index = () => {
  const [emp, setEmp] = useState(empData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [employee] = emp.filter((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };
  //   Deleting
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = emp.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500, //timer set to 1.5s
        });

        setEmp(emp.filter((employee) => employee.id !== id));
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List emp={emp} handleEdit={handleEdit} handleDelete={handleDelete} />
        </>
      )}
      {isAdding && <Add emp={emp} setEmp={setEmp} setIsAdding={setIsAdding} />}
      {isEditing && (
        <Edit
          emp={emp}
          selectedEmployee={selectedEmployee}
          setEmp={setEmp}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};
