import React, { useState } from "react";
import { empData } from "../data/data";
import Edit from "./Edit";
import { Header } from "./Header";
import List from "./List";
import Swal from "sweetalert2";
import { Add } from "./Add";

export const Index = () => {
  console.log("first");
  const [emp, setEmp] = useState(empData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  console.log("isAdd", isAdding);
  console.log("is", emp);

  const handleEdit = (id) => {
    console.log(id);
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
          text: `${employee.name} ${employee.age}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500, //timer set to 1.5s
        });

        setEmp(emp.filter((employee) => employee.id !== id));
      }
    });
  };
  console.log(isAdding, "Adding compo");
  console.log(isEditing, "editing compo");
  console.log(emp, "data");

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <div>
          <Header setIsAdding={setIsAdding} />
          <List emp={emp} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
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
