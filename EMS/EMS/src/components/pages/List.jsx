import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import "./list.css";

const List = ({ emp, handleEdit, handleDelete }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="grey">
        <TableCaption>Employees Complete Data</TableCaption>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>salary</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {emp.length > 0 ? (
            emp.map((employee, i) => (
              <tr key={employee.id}>
                <td style={{ paddingLeft: "30px" }}>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.salary}</td>
                <td>{employee.date} </td>
                <td className="text-right">
                  <Button
                    colorScheme="blue"
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ marginLeft: "12px" }}
                    colorScheme="red"
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </Button>
                </td>
                {/* <td className="text-left">
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </Button>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Emp</td>
            </tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default List;
